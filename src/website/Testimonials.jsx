import { useState } from "react";
import { vector } from "../assets/icon";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [count, setCount] = useState(0);
  function handelClick(index) {
    count === "" ? setCount(index) : setCount(index);
  }
  return (
    <section>
      <div className="speacial-heading">
        <h1>
          <span>What Our</span> Customers Say
        </h1>
        <p>
          At This Part you can See Few Of The Many Positive reviews Of Our
          Customers.
        </p>
      </div>
      <div className="flex justify-center items-end max-sm:flex-wrap container py-10">
        {testimonials.map((e, index) => {
          const show = index === count;
          const hidden = index !== count;
          return (
            <div key={e.card}>
              <img
                src={e.card}
                onClick={() => handelClick(index)}
                alt="card"
                className={`${
                  hidden ? "" : "hidden"
                } w-[420px] h-[420px] pr-3 max-sm:hidden cursor-pointer transition duration-[.3s]`}
              />
              <div
                className={`${
                  show ? "" : "hidden"
                } flex items-end gap-7 mr-5 max-sm:flex-col max-sm:justify-center max-sm:items-center transition duration-[.3s]`}
              >
                <img src={e.image} alt="image" className="max-sm:w-[200px]" />
                <div className="bg-red-900 p-5 rounded-xl max-sm:m-5 ">
                  <div className="flex justify-between items-center ">
                    <h1 className="text-white text-xl ">
                      {e.name} <br />
                      <span className="text-[#888888] py-3 text-sm">
                        Our Trainer
                      </span>
                    </h1>
                    <img src={vector} alt="vector" />
                  </div>
                  <p className=" text-sm text-white mt-3">
                    I’ve been using Fitmaker for the past three months, and I’m
                    genuinely impressed. The website is easy to navigate, and
                    everything is laid out clearly. I purchased the Premium
                    Plan, and the personalized coaching has been a game-changer
                    for me. My coach is incredibly supportive and always
                    available to answer my questions. The weekly video sessions
                    keep me motivated, and the custom meal plans have helped me
                    stay on track with my goals. Highly recommended for anyone
                    serious about their fitness journey!
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
