import { Link } from "react-router-dom";
import { plans } from "../constants";

const OurPlans = () => {
  return (
    <section id="membership">
      <div className="speacial-heading">
        <h1>
          <span>our</span> Plans
        </h1>
        <p>
          Select the plan that suits your fitness goals and let our expert
          coaches guide you every step of the way.
        </p>
      </div>
      <div className="flex container justify-center items-center py-7 gap-6 max-sm:flex-wrap p-5">
        {plans.map((e, index) => {
          const red = index === 1;
          const pro = index === 0;
          const begginer = index === 2;
          return (
            <div
              key={e.desc}
              className={`p-5 border-2 ${
                red
                  ? "border-[#cf0d13] lg:-translate-y-4 "
                  : "border-[#c94b17] "
              }rounded-xl lg:hover:-translate-y-6 max-sm:hover:-translate-y-2 transition fill-hover relative cursor-pointer`}
            >
              <div
                className={` absolute top-[35%] left-[35%] w-[10px] h-[10px] rounded-full fill-circul ${
                  red ? "shadow-red " : "shadow-or "
                }`}
              ></div>
              <p
                className={` ${
                  red ? "text-[#cf0d13] " : "text-[#c94b17] "
                } text-center`}
              >
                package
              </p>
              <h1 className="text-white font-bold text-2xl text-center py-5">
                {e.package}
              </h1>
              <p
                className={` ${
                  red ? "text-[#cf0d13] " : "text-[#c94b17] "
                } text-center`}
              >
                Description
              </p>
              <p className="text-white py-5 text-sm">{e.desc}</p>
              <p
                className={` ${
                  red ? "text-[#cf0d13] " : "text-[#c94b17] "
                } text-center`}
              >
                Features
              </p>
              <div className="text-white py-5 text-sm">
                <p>{e.feat[1]}</p>
                <p>{e.feat[2]}</p>
                <p>{e.feat[3]}</p>
                <p className={`${begginer ? "invisible" : ""}`}>{e.feat[4]}</p>
                <p className={`${begginer ? "invisible" : ""}`}>{e.feat[5]}</p>
                <p className={`${pro || begginer ? "invisible" : ""}`}>
                  {e.feat[6]}
                </p>
                <p className={`${pro || begginer ? "invisible" : ""}`}>
                  {e.feat[7]}
                </p>
              </div>
              <h1 className="text-center py-2 text-[#888888]">
                <span className="text-white text-2xl pr-1">{e.price}</span>/USDT
              </h1>
              <div className="flex justify-center items-center py-2">
                <Link
                  to={"/signup"}
                  className={`${
                    red ? "button-red" : "button-or hover:bg-[#c94b17]"
                  } w-[200px] text-center cursor-pointer `}
                >
                  Choose This Plan
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurPlans;
