import { Link } from "react-router-dom";
import { home } from "../../assets/images";
import Nav from "../Nav";

const TraningInHome = () => {
  return (
    <section className="bg-main lg:h-[100vh]">
      <Nav />
      <div className="flex justify-center items-center container w-[100%] h-[100%] gap-8 max-sm:flex-col">
        <div className="service-style max-sm:order-2 max-sm:p-[20px]">
          <h1>How to Train at Home Easily</h1>
          <p>Training at home saves time and offers convenience.</p>
          <h2>Effective Home Workouts:</h2>
          <ul>
            <li>Push-ups, squats, and planks.</li>
            <li>Use resistance bands or water bottles as weights.</li>
          </ul>
          <h2>Training Organization:</h2>
          <ul>
            <li>Design a weekly plan with rest periods.</li>
            <li>Gradually increase intensity to build strength and fitness.</li>
          </ul>
          <div>
            <Link to={'/signup'} className="button-red">
              Join our home training plans!
            </Link>
          </div>
        </div>
        <div className=" max-sm:order-1 max-sm:mt-[20%]">
          <img src={home} alt="" className="w-[70%] mx-auto red-shadow" />
        </div>
      </div>
    </section>
  );
};

export default TraningInHome;
