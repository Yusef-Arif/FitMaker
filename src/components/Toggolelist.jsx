import { useEffect, useState } from "react";
import { icon } from "../assets/icon";
import { Link } from "react-router-dom";
function Toggolelist() {
  const [click, setclick] = useState(false);
  const [log, setLog] = useState(false);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    setLog(user ? true : false);
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    setLog(false);
  };
  function handelClick() {
    click ? setclick(false) : setclick(true);
  }
  return (
    <div>
      <a onClick={() => handelClick()} className="relative cursor-pointer">
        <img src={icon} alt="" />
      </a>
      {click && (
        <div className="absolute max-sm:top-[74px] max-sm:left-0 bg-[#5b0408] w-full p-3 h-[350px] z-30">
          <ul className="flex text-white flex-col justify-center items-center pb-2">
            <li className="text-white bottom-1 border-b border-[#cf0d13] w-full text-center ">
              <a href="/">Home</a>
            </li>
            <li className="text-white bottom-1 border-b border-[#cf0d13] w-full text-center p-3">
              <a href="#services">Services</a>
            </li>
            <li className="text-white bottom-1 border-b border-[#cf0d13] w-full text-center p-3">
              <a href="#membership">Membership</a>
            </li>
            <li className="text-white bottom-1 border-b border-[#cf0d13] w-full text-center p-3">
              <a href="#fitnesstools">Fitness Tools</a>
            </li>
            <li className="text-white bottom-1 border-b border-[#cf0d13] w-full text-center p-3">
              <a href="#trainers">Trainers</a>
            </li>
            <li className="text-white bottom-1 border-b border-[#cf0d13] w-full text-center p-3">
              <a href="#about">About Us</a>
            </li>
            <li className="p-[15px]">
              {!log ? (
                <div>
                  <Link to={"/login"} className="mr-3 button-or">
                    Login
                  </Link>
                  <Link to={"/signup"} className="button-red">
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="pb-2">
                  <button onClick={handleLogout} className="button-red">
                    Logout
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Toggolelist;
