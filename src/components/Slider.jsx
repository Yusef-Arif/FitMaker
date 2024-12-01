import { Link } from "react-router-dom";
import { trainers } from "../constants";
import { arrow } from "../assets/icon";

const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {trainers.map((e, index) => {
          return (
            <Link
              to={`trainer/${index}`}
              key={e.name}
              className="m-[20px] p-2 container tool-hover duration-[.3s] w-[80%] cursor-pointer"
            >
              <div>
                <img src={e.trainer} alt="trainer image" className="w-[100%]" />
              </div>
              <div className="bg-[#262626] p-2 overflow-hidden">
                <h1 className="text-xl tool-red text-white font-semibold max-sm:text-xl duration-[.3s]">
                  {e.name}
                </h1>
                <p className="text-[#888888] my-1 text-sm max-sm:text-[11px]">
                  Pesonal Trainer
                </p>
                <div className=" flex items-center">
                  <p className="text-white text-sm tool-red max-sm:text-[12px] duration-[.3s]">
                    Learn More
                  </p>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="ml-2 w-4 h-4 go-left"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slider;
