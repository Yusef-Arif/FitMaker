import { Link } from "react-router-dom";
import { plan } from "../../assets/images";
import Nav from "../Nav";

const GymPlane = () => {
  return (
    <section className="bg-main lg:h-[100vh]">
      <Nav />
      <div className="flex justify-center items-center container w-[100%] h-[100%] gap-8 max-sm:flex-col">
        <div className="service-style max-sm:order-2 max-sm:p-[20px]">
          <h1>Professional Plans for Your Gym Success</h1>
          <p>
            A customized plan helps you achieve your fitness goals effectively.
          </p>
          <h2>Plan Components:</h2>
          <ul>
            <li>
              A comprehensive workout schedule targeting all major muscle
              groups.
            </li>
            <li>Guidance on the right weights and repetition ranges.</li>
            <li>A tailored nutrition plan to support performance.</li>
          </ul>
          <h2>Success Stories:</h2>
          <p>
            See how others achieved their goals with our professional plans.
          </p>
          <div>
            <Link to={'/signup'}className="button-red">
              Start your gym plan today!
            </Link>
          </div>
        </div>
        <div className=" max-sm:order-1 max-sm:mt-[20%]">
          <img src={plan} alt="" className="w-[50%] mx-auto red-shadow" />
        </div>
      </div>
    </section>
  );
};

export default GymPlane;
