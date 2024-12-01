import { useState } from "react";
import Nav from "../Nav";
import { calori } from "../../assets/images";
import WarningPOP from "../../components/WarningPOP";

const WaterIntakeCalculator = () => {
  const [form, setForm] = useState({
    weight: "",
    activity: "",
    climate: "",
  });

  const [WI, setWI] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setWI((form.weight * 35) + Number(form.activity) + Number(form.climate));
  }
  return (
    <section className="bg-main lg:h-[100vh]">
      <WarningPOP />
      <Nav />
      <div className="flex lg:justify-evenly items-center h-[100%] max-sm:w-[85%] gap-8 container max-sm:pt-[30%] p-5 max-sm:flex-col max-sm:justify-center">
        <div className="red-shadow p-5 rounded-xl max-sm:w-[100%] ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
              <option value="0">Sedentary</option>
              <option value="500">Moderately Active</option>
              <option value="1000">Highly Active</option>
            </select>
            <label htmlFor="m" className="red font-bold text-xl">
              Climate
            </label>
            <select
              id="m"
              name="climate"
              value={form.climate}
              onChange={handleChange}
              required
            >
              <option value="">Select Climate</option>
              <option value="500">Tropical</option>
              <option value="0">Temperate</option>
              <option value="-500">Cold</option>
            </select>
            <div className="py-3 text-center">
              <button type="submit" className="button-red w-[100%]">
                Submit
              </button>
            </div>
          </form>
          <p></p>
        </div>
        {WI !== "" ? (
          <div className="red-shadow rounded-xl p-5">
            <h1 className="text-xl font-bold red pb-3">
              Daily Water Recommendation :
            </h1>
            <h2 className="text-white">
              - You need to drink at least{" "}
              <span className="font-semibold orange">
                {(WI / 240).toFixed(0)}
              </span>{" "}
              glasses of water everyday.
            </h2>
            <h2 className="text-white pt-2">
              - This is equivalent to{" "}
              <span className="font-semibold orange">
                {(WI / 1000).toFixed(2)}
              </span>{" "}
              litres [
              <span className="font-semibold orange">
                {(WI / 29.5735).toFixed(2)}
              </span>{" "}
              ounces] of water.
            </h2>
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

export default WaterIntakeCalculator;
