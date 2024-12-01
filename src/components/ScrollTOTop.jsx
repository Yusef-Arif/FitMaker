import { useState } from "react";
import { arrow_button_up } from "../assets/icon";

const ScrollTOTop = () => {
  const [up, setUp] = useState(false);
  window.onscroll = function () {
    this.scrollY >= 1000 ? setUp(true) : setUp(false);
  };
  function handelClick(){
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div onClick={handelClick}
      className={`fixed right-[20px] bottom-[25px] z-20 cursor-pointer bg-[#5b0408] px-3 py-4  rounded-xl ${
        up ? "block" :"hidden"
      }`}
    >
      <img src={arrow_button_up} alt="" className=""/>
    </div>
  );
};

export default ScrollTOTop;
