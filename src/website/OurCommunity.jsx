import { logo } from "../assets/images";
import Landing_text from "../components/Landing_text";
import { Benefits } from "../constants";

const OurCommunity = () => {
  return (
    <section id="about">
      <div className="speacial-heading">
        <h1>
          <span>About</span> US
        </h1>
        <p>
          Sign up now to unlock exclusive access to personalized workout plans,
          expert coaching, and a supportive community that will help you achieve
          your fitness goals.
        </p>
      </div>
      <div className="grid grid-cols-12 container py-10 gap-5  max-sm:pl-[24px]">
        <div className="col-span-6 max-sm:col-span-11 grid grid-cols-6 gap-5 rounded-xl">
          {Benefits.map((e) => {
            return (
              <div
                key={e.desc}
                className="speacial-heading col-span-3 bg-[#0000003d]"
              >
                <h1 className="!text-[20px]">
                  <span className="!text-[20px]">{e.title.split(" ")[0]}</span>{" "}
                  {e.title.split(" ")[1]}
                </h1>
                <p className="text-start text-sm">{e.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="col-span-6 max-sm:col-span-11 bg-[#5b0408] rounded-xl p-5 py-auto max-sm:hidden">
          <div className="flex justify-center items-center w-[100%] py-[5%]">
            <img src={logo} alt="" />
          </div>
          <Landing_text />
        </div>
      </div>
    </section>
  );
};

export default OurCommunity;
