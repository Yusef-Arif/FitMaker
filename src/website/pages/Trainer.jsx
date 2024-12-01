import { Link, useParams } from "react-router-dom";
import { trainers } from "../../constants";
import Nav from "../Nav";
import { arrow } from "../../assets/icon";
import Slider from "react-slick";
import { useEffect } from "react";

const Trainer = () => {
  const { id } = useParams();
  const trainer = trainers[id];
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="bg-main ">
      <Nav />
      {trainer ? (
        <div className="container">
          <div className="flex justify-center items-start lg:pt-[10%] max-sm:pt-[20%] lg:h-[90vh] max-sm:flex-col gap-5">
            <div className="max-sm:order-2 max-sm:p-5">
              <h2 className="text-4xl font-bold red mb-4">{trainer.name}</h2>
              <p className="text-white ">
                Your fitness journey deserves the best guide, and our trainer is
                here to make it happen! With years of experience, a passion for
                health, and a proven track record, they are dedicated to helping
                you achieve your goals. Whether you&#39;re building muscle,
                losing weight, or staying fit at home, you&#39;re in the best
                hands. Let&#39;s make your transformation a reality together!
              </p>
              <p className="my-10 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium expedita, provident tempora quidem alias impedit
                illo repudiandae ducimus quaerat magnam at veniam odio ut
                voluptatibus asperiores cumque adipisci et a.
              </p>
              <p className="my-10 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium expedita, provident tempora quidem alias impedit
                illo repudiandae ducimus quaerat magnam at veniam odio ut
                voluptatibus asperiores cumque adipisci et a.
              </p>
              <div className="mt-5">
                <Link
                  to={"/signup"}
                  href="#"
                  className="button-red mr-3 text-center lg:w-[250px] max-sm:w-[150px]  mt-5"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
            <div className="max-sm:order-1 flex justify-center items-center">
              <img
                src={trainer.trainer}
                alt=""
                className="lg:w-[1500px] max-sm:w-[60%] red-shadow"
              />
            </div>
          </div>
          <div className="container py-2 max-sm:overflow-hidden">
            <h1 className="text-3xl font-bold red pb-7 ml-3">
              <span className="text-white">Another </span> Trainers :
            </h1>
            <Slider {...settings}>
              {trainers.map((e, index) => {
                if (index === id) {
                  return null;
                } else {
                  return (
                    <Link
                      to={`/trainer/${index}`}
                      key={e.name}
                      className="m-[20px] p-2 container tool-hover duration-[.3s] w-[80%] cursor-pointer"
                    >
                      <div>
                        <img
                          src={e.trainer}
                          alt="trainer image"
                          className="w-[100%]"
                        />
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
                }
              })}
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Trainer;
