import { useState } from "react";
import Nav from "../Nav";
import { calori } from "../../assets/images";
import { macroCalculatorResult } from "../../constants";
import WarningPOP from "../../components/WarningPOP";

const MacronutrionCalculator = () => {
  const [form, setForm] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "",
    goal: "",
  });

  const [results, setResults] = useState({
    BMR: "",
    TDEE: "",
    calories: "",
    protein: "",
    fat: "",
    carb: "",
    sugar: "",
    saturatedFat: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();  

    let BMR; 
  form.gender === "male"
    ? (BMR = 10 * form.weight + 6.25 * form.height - 5 * form.age + 5)
    : (BMR = 10 * form.weight + 6.25 * form.height - 5 * form.age - 161);
  const TDEE = BMR * form.activity;
  const calories = TDEE + Number(form.goal);

  setResults({
      BMR: BMR,
      TDEE: TDEE,
      calories: calories,
      protein: (calories * 0.25) / 4,
      fat: (calories * 0.25) / 9,
      carb: (calories * 0.5) / 4,
      sugar: (TDEE * 0.1) / 4,
      saturatedFat: (TDEE * 0.1) / 9,
    });
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
            <label htmlFor="c" className="red font-bold text-xl">
              Your Goal
            </label>
            <select
              id="c"
              name="goal"
              value={form.goal}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Goal</option>
              <option value="0">Maintain Weight</option>
              <option value="-250">
                Mild Weight Loss (0.5 lb / 0.25 kg per week)
              </option>
              <option value="-500">Weight Loss (1 lb / 0.5 kg per week)</option>
              <option value="-1000">
                Extreme Weight Loss (2 lb / 1 kg per week)
              </option>
              <option value="250">
                Mild Weight Gain (0.5 lb / 0.25 kg per week)
              </option>
              <option value="500">Weight Gain (1 lb / 0.5 kg per week)</option>
              <option value="1000">
                Extreme Weight Gain (2 lb / 1 kg per week)
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
          {results.BMR !== "" ? (
            <div className="red-shadow p-5 rounded-xl">
              {macroCalculatorResult(results).map((e) => {
                return (
                  <div key={e.h1} className="flex items-center pb-3">
                    <h1 className="text-2xl red font-bold pr-2">{e.h1} :</h1>
                    <p className="text-white">
                      <span className="text-xl orange font-semibold">
                        {e.span}
                      </span>{" "}
                      {e.p}
                    </p>
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

export default MacronutrionCalculator;
