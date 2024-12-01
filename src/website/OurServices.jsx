import { Link } from "react-router-dom";
import { arrow } from "../assets/icon";
import { services } from "../constants";

const OurServices = () => {
  return (
    <section id="services">
      <div className="speacial-heading">
        <h1>
          <span>our</span> Services
        </h1>
        <p>
          At This Part You Can Easily access all of our servises. take a look at
          them and chose wich ever you want.
        </p>
      </div>
      <div className="flex justify-center items-center container max-sm:flex-wrap pb-7 ">
        {services.map((e) => {
          return (
            <Link
              to={`/service/${e.path}`}
              key={e.path}
              className="relative rounded-2xl tool-hover transition hover:-translate-y-4 cursor-pointer m-5 duration-[.3s]"
            >
              <img src={e.service} alt="service" className="rounded-2xl" />
              <div className="absolute flex items-center bottom-[22px] left-[8px] z-10 p-2 bg-opacity-50">
                <p className="text-white font-semibold duration-[.3s] tool-red">
                  Learn More
                </p>
                <img src={arrow} alt="arrow" className="ml-2 w-4 h-4 go-left" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
