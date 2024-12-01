import { Link } from "react-router-dom";
import { arrow } from "../assets/icon";
import { tools } from "../constants";

const OurfitnessTools = () => {
  return (
    <section id="fitnesstools">
      <div className="speacial-heading">
        <h1>
          <span>our</span> fitness Tools
        </h1>
        <p>
          Access a variety of tools to help you reach your fitness goals more
          effectively.
        </p>
      </div>
      <div className="flex justify-center items-center container max-sm:flex-wrap pb-7 max-sm:p-5 ">
        {tools.map((e) => {
          return (
            <Link
              to={`tool/${e.path}`}
              key={e.tool}
              className="relative rounded-2xl tool-hover cursor-pointer m-5 p-5 transition"
            >
              <img src={e.tool} alt="tool" className="rounded-2xl" />
              <div className="absolute flex items-center bottom-[22px] left-[8px] z-10 p-2 bg-opacity-50">
                <p className="text-white font-semibold tool-red transition">
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
}

export default OurfitnessTools