import { Link } from "react-router-dom";

const Landing_text = () => {
  return (
    <div>
      <p className="text-stone-200 pt-5 max-sm:p-3">
        Join the Fitmaker community and transform your fitness journey. Our
        expert coaches and personalized programs are designed to help you
        achieve your goals and exceed your expectations. Ready to make a change?
      </p>
      <div className="mt-8 flex justify-center">
        <Link
          to={"/signup"}
          href="#"
          className="button-red mr-3 text-center lg:w-[250px] max-sm:w-[150px] max-sm:pt-2"
        >
          Start Your Journey
        </Link>
        <a
          href="#membership"
          className="button-or text-center lg:w-[250px] max-sm:w-[150px]"
        >
          Explore Programs
        </a>
      </div>
    </div>
  );
};

export default Landing_text;
