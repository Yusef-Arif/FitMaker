import { Link } from "react-router-dom";
import { build } from "../../assets/images";
import Nav from "../Nav";

const BuldingMuscle = () => {
  return (
    <section className="bg-main lg:h-[100vh]">
      <Nav />
      <div className="flex justify-center items-center container w-[100%] h-[100%] max-sm:flex-col">
        <div className="service-style max-sm:order-2 max-sm:p-[20px]">
          <h1>How to Build Your Muscles Properly</h1>
          <p>
            The importance of building muscles for overall health and increasing
            strength. Regular training can improve your quality of life.
          </p>
          <h2>Steps to Build Muscles:</h2>
          <ul>
            <li>
              <strong>Set Goals:</strong> Define a clear objective (e.g., gain
              5kg of muscle in 6 months).
            </li>
            <li>
              <strong>Choose the Right Exercises:</strong> Focus on squats,
              deadlifts, and bench presses.
            </li>
            <li>
              <strong>Nutrition:</strong> Highlight the importance of protein
              (e.g., chicken, eggs, legumes) along with carbs and healthy fats.
            </li>
          </ul>
          <h2>Additional Tips:</h2>
          <ul>
            <li>
              Stick to a weekly workout schedule.
            </li>
            <li>
              Ensure proper sleep for muscle recovery and growth.
            </li>
          </ul>
          <div className="my-4">
            <Link to={'/signup'} className="button-red">
              Join our plans now!
            </Link>
          </div>
        </div>
        <div className=" max-sm:order-1 max-sm:mt-[20%]">
          <img src={build} alt="" className="w-[70%] mx-auto red-shadow" />
        </div>
      </div>
    </section>
  );
};

export default BuldingMuscle;
