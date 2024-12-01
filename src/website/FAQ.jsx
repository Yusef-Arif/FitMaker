import { useState } from "react";
import { arrow_button, arrow_button_up } from "../assets/icon";
import { FAQs } from "../constants";

const FAQ = () => {
  const [count, setCount] = useState(0);
  function handelClick(index) {
    count === "" ? setCount(index) : setCount(index);
  }
  return (
    <section className="pb-10 p-5">
      <div className="speacial-heading">
        <h1>
          <span>FAQ</span>
        </h1>
      </div>
      <div className="container border-[1px] border-[#c94b17] m-5">
        {FAQs.map((e, index) => {
          const show = index === count;
          const hidden = index !== count;
          return (
            <div
              key={e.q}
              className="mb-5 border-[1px] border-[#c94b17] cursor-pointer"
              onClick={() => handelClick(index)}
            >
              <div
                className={`text-white border-[1px]  p-3 flex justify-between items-center ${
                  show ? "border-[#cf0d13]" : "border-[#c94b17]"
                }`}
              >
                <h>{e.q}</h>
                <img
                  src={arrow_button_up}
                  alt="arrow button up"
                  className={`${show ? "border-[#cf0d13]" : "hidden"}`}
                />
                <img
                  src={arrow_button}
                  alt="arrow button down"
                  className={`${hidden ? "" : "hidden"}`}
                />
              </div>
              <div
                className={`text-[#888888] border-[1px] p-3 ${
                  show ? "border-[#cf0d13]" : "hidden"
                }`}
              >
                <p>{e.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
