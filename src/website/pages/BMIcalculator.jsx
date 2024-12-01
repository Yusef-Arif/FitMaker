import { useState } from "react";
import Nav from "../Nav";
import { calori } from "../../assets/images";
import WarningPOP from "../../components/WarningPOP";

const BMIcalculator = () => {
  const [form, setForm] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [BMI, setBMI] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBMI(form.weight / (height * height));
  }
  let height = form.height / 100;
  let minWeight = 19.1 * (height * height);
  let maxWeight = 27 * (height * height);
  let text;
  if (BMI >= 19.1 && BMI <= 27) {
    text = "Healthy weight";
  } else if (BMI < 19.1) {
    text = "Underweight";
  } else {
    text = "Overweight";
  }
  return (
    <section className="bg-main lg:h-[100vh]">
      <WarningPOP />
      <Nav />
      <div className="flex lg:justify-evenly items-center h-[100%] max-sm:w-[85%] gap-8 container max-sm:pt-[30%] p-5 max-sm:flex-col max-sm:justify-center">
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
            <div className="py-3 text-center">
              <button type="submit" className="button-red w-[100%]">
                Submit
              </button>
            </div>
          </form>
          <p></p>
        </div>
        {BMI !== "" ? (
          <div className="red-shadow rounded-xl p-5">
            <h1 className="text-xl font-bold red">
              BMI:{" "}
              <span className="font-semibold orange">{BMI.toFixed(2)}</span>{" "}
            </h1>
            <h1 className="text-xl font-bold red py-3">
              Healthy weight between :{" "}
              <span className="font-semibold orange">
                {minWeight.toFixed(2)}{" "}
              </span>
              KG -{" "}
              <span className="font-semibold orange">
                {maxWeight.toFixed(2)}{" "}
              </span>
              KG (<span className="font-semibold orange">{text}</span>)
            </h1>
            <h1 className="text-xl font-bold red">
              Ponderal Index:{" "}
              <span className="font-semibold orange">
                {(70 / (height * height * height)).toFixed(2)}
              </span>
            </h1>
          </div>
        ) : (
          <div className="max-sm:hidden">
            <img src={calori} alt="" className="w-[50%] mx-auto red-shadow " />
          </div>
        )}
      </div>
    </section>
  );
};

export default BMIcalculator;
