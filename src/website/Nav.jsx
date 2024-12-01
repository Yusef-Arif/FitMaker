import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import Toggolelist from "../components/Toggolelist";
import { useEffect, useState } from "react";

const Nav = () => {
  const [log, setLog] = useState(false);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    setLog(user ? true : false);
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    setLog(false);
  };

  return (
    <nav className="p-8 max-sm:p-3 flex justify-between items-center">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ul className="flex text-white max-sm:hidden header max-md:hidden">
        <li className="pr-10">
          <a href="/">Home</a>
        </li>
        <li className="pr-10">
          <a href="#services">Services</a>
        </li>
        <li className="pr-10">
          <a href="#membership">Membership</a>
        </li>
        <li className="pr-10">
          <a href="#fitnesstools">Fitness Tools</a>
        </li>
        <li className="pr-10">
          <a href="#trainers">Trainers</a>
        </li>
        <li className="pr-10">
          <a href="#about">About Us</a>
        </li>
        <li>
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
      <div className="lg:hidden md:hidden">
        <Toggolelist />
      </div>
    </nav>
  );
};

export default Nav;
