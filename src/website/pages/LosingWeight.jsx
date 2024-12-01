import { Link } from "react-router-dom";
import { cardio } from "../../assets/images";
import Nav from "../Nav";

const LosingWeight = () => {
  return (
    <section className="bg-main lg:h-[100vh]">
      <Nav />
      <div className="flex justify-center items-center container w-[100%] h-[100%] max-sm:flex-col">
        <div className="service-style max-sm:order-2 max-sm:p-[20px]">
          <h1>Your First Step Toward a Healthy and Fit Body</h1>
          <p>
            Losing weight is not just about appearance but also improving
            overall health.
          </p>
          <h2>Steps to Lose Weight:</h2>
          <ul>
            <li>
              <strong>Healthy Nutrition:</strong> Reduce calorie intake and
              focus on proteins and vegetables.
            </li>
            <li>
              <strong>Physical Activity:</strong> Engage in aerobic exercises
              like running or walking.
            </li>
            <li>
              <strong>Track Your Progress:</strong> Use apps to monitor daily
              calories.
            </li>
          </ul>
          <h2>Additional Tips:</h2>
          <ul>
            <li>Avoid sweets and sugary drinks.</li>
            <li>Stay hydrated by drinking plenty of water.</li>
          </ul>
          <div>
            <Link to={'/signup'} className="button-red">
              Get your plan today!
            </Link>
          </div>
        </div>
        <div className=" max-sm:order-1 max-sm:mt-[20%]">
          <img src={cardio} alt="" className="w-[50%] mx-auto red-shadow" />
        </div>
      </div>
    </section>
  );
};

export default LosingWeight;
