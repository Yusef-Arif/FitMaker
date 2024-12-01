import { circul1, circul2, Ellipse, man } from "../assets/images";
import Landing_text from "../components/Landing_text";
import { statistics } from "../constants";

const LandingPage = () => {
  return (
    <section>
      <div className="max-sm:flex-col flex justify-center items-center  w-full h-full landing">
        <div className="flex-row flex justify-center items-center lg:container lg:gap-14 container pt-10 ">
          <div className="lg:ml-10 ">
            <h1 className="text-white lg:text-4xl max-sm:text-xl  font-bold text-center flex-1">
              Achive Your
            </h1>
            <h1 className="custom-color text-6xl max-sm:text-2xl font-extrabold my-3 text-center">
              Fitness Goals
            </h1>
            <h1 className="text-white text-4xl max-sm:text-xl font-bold text-center">
              With FitMaker
            </h1>
            <div className="max-sm:hidden">
              <Landing_text />
            </div>
          </div>

          <div className="relative lg;pt-4 max-sm:pt-2 max-sm:w-[200px] bg-transparent">
            <img src={Ellipse} alt="" className="w-full h-auto" />
            <img
              src={man}
              alt=""
              className="absolute top-[-7%] left-[50%] transform -translate-x-1/2 w-[30%] max-sm:w-[90%] md:w-[20%] lg:w-[88%]"
            />
            <img
              src={circul1}
              alt=""
              className="absolute top-[-18%] left-[-5%] max-sm:hidden"
            />
            <img
              src={circul2}
              alt=""
              className="absolute bottom-[-18%] right-[-5%] max-sm:hidden"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <Landing_text />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 py-10 max-sm:flex-col">
        {statistics.map((e, index) => {
          const isNotFirst = index > 0;
          const isNotEnd = index < 3;
          const orange = index % 2 != 0;
          return (
            <div
              key={e.label}
              className={`text-center ${
                isNotFirst ? " lg:border-l-2 border-[#cf0d13] pl-3" : ""
              }  ${
                isNotEnd ? " max-sm:border-b-2 border-[#cf0d13]" : ""
              } max-sm:w-full max-sm:pb-5 `}
            >
              <div>
                <h1 className="text-white">
                  <span
                    className={`font-bold text-4xl pr-2  ${
                      orange ? "text-[#c94b17]" :"text-[#cf0d13]"
                    }`}
                  >
                    {e.value}
                  </span>{" "}
                  {e.label}
                </h1>
              </div>
              <p className="text-[#888888]">{e.pra}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LandingPage;
