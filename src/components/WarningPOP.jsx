import { useState } from "react";
import { cross } from "../assets/images";

const WarningPOP = () => {
  const [show,setShow] = useState(true);
  return (
    <div
      className={`fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#5b0408] p-3 rounded-xl max-sm:w-[90%] ${
        show ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed lg:w-[5%]  max-sm:w-[10%] right-[20px] cursor-pointer"
        onClick={() => setShow(false)}
      >
        <img src={cross} alt="" />
      </div>
      <h1 className="text-2xl red font-bold pl-5">warning :</h1>
      <p className="p-5 text-white">
        The results are a guideline for more typical situations. Please
        consult with a doctor for your macronutrient needs if you are an
        athlete, training for a specific purpose, or on special diet due to a
        disease, pregnancy, or other conditions.
      </p>
    </div>
  );
};

export default WarningPOP;