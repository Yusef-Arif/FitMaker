import { useState } from "react";
import Nav from "../Nav";
import { CalorieCalculatorResult } from "../../constants";
import { calori } from "../../assets/images";
import WarningPOP from "../../components/WarningPOP";

const CalorieCalculator = () => {
  const [form, setForm] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "",
  });

  const [Cpd, setCpd] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let BMR;
    if (form.gender === "male") {
      BMR = 10 * form.weight + 6.25 * form.height - 5 * form.age + 5;
    } else {
      BMR = 10 * form.weight + 6.25 * form.height - 5 * form.age + 161;
    }
    const cpd = BMR * form.activity;
    setCpd(cpd);
  }

  return (
    <section className="bg-main lg:h-[100vh]">
      <WarningPOP />
      <Nav />
      <div className="flex lg:justify-evenly items-center h-[100%] max-sm:w-[85%] gap-8 container max-sm:pt-[20%] p-5 max-sm:flex-col max-sm:justify-center">
        <div className="red-shadow p-5 rounded-xl max-sm:w-[100%] ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label htmlFor="a" className="red font-bold text-xl">
              Age
            </label>
            <input
              className="input-text"
              type="number"
              name="age"
              id="a"
              required
              value={form.age}
              onChange={handleChange}
            />
            <div className="flex justify-start items-center">
              <h1 className="red font-bold text-xl">Gender:</h1>
              <input
                type="radio"
                name="gender"
                id="m"
                value="male"
                onChange={handleChange}
                required
                className="p-5 w-[8%]"
              />
              <label htmlFor="m" className="orange cursor-pointer radio-label">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                id="f"
                value="female"
                onChange={handleChange}
                required
                className="p-5 w-[8%]"
              />
              <label htmlFor="f" className="orange cursor-pointer radio-label">
                Female
              </label>
            </div>
            <label htmlFor="h" className="red font-bold text-xl">
              Height (cm)
            </label>
            <input
              className="input-text"
              type="number"
              name="height"
              id="h"
              required
              value={form.height}
              onChange={handleChange}
            />
            <label htmlFor="w" className="red font-bold text-xl">
              Weight (kg)
            </label>
            <input
              className="input-text"
              type="number"
              name="weight"
              id="w"
              required
              value={form.weight}
              onChange={handleChange}
            />
            <label htmlFor="c" className="red font-bold text-xl">
              Activity Level
            </label>
            <select
              className="input-text"
              id="c"
              name="activity"
              value={form.activity}
              onChange={handleChange}
              required
            >
              <option value="">Select Activity Level</option>
              <option value="1.0">Basal Metabolic Rate (BMR)</option>
              <option value="1.2">Sedentary: little or no exercise</option>
              <option value="1.375">Light: exercise 1–3 times/week</option>
              <option value="1.55">
                Active: daily exercise or intense exercise 3–4 times/week
              </option>
              <option value="1.725">
                Very Active: intense exercise 6–7 times/week
              </option>
              <option value="1.9">
                Extra Active: very intense exercise daily, or physical job
              </option>
            </select>
            <div className="py-3 text-center">
              <button type="submit" className="button-red w-[100%]">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          {Cpd !== "" ? (
            <div className="red-shadow p-5 rounded-xl">
              {CalorieCalculatorResult(Cpd).map((e) => {
                return (
                  <div
                    key={e.h1}
                    className="flex gap-3 p-5 justify-evenly items-center border-b-2 border-t-2 border-[#cf0d13]"
                  >
                    <div>
                      <h1 className="text-xl red font-semibold">{e.h1} :</h1>
                      <p className="text-[#888888]">{e.p1}</p>
                    </div>
                    <div className="mx-auto">
                      <h1 className="text-white">
                        <span className="text-2xl orange font-semibold">
                          {e.Calories.toFixed(2)}
                        </span>{" "}
                        {e.percent}
                      </h1>
                      <p className="text-white">{e.p2}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="max-sm:hidden">
              <img
                src={calori}
                alt=""
                className="w-[60%] mx-auto red-shadow "
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalorieCalculator;
