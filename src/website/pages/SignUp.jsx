import { useState } from "react";
import { man2 } from "../../assets/images";
import Nav from "../Nav";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handelChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault(); 
    window.localStorage.setItem("user", JSON.stringify(form));
    window.location.assign("/");
  }
  return (
    <section className="bg-main">
      <Nav />
      <div className=" h-[100vh] flex justify-center items-center ">
        <div className="bg-[#5B0408]  w-[80%] px-5 flex lg:justify-between container items-center form-style red-shadow max-sm:justify-center">
          <div className="lg:w-[45%] z-10 max-sm:bg-[#0000003d] w-[100%] p-10">
            <h1 className="text-4xl font-bold text-[#cf0d13] pb-7">Sign-Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label htmlFor="n">Name</label>
              <input
                type="text"
                id="n"
                name="name"
                value={form.name}
                onChange={handelChange}
                placeholder="Enter Your Name"
                required
              />
              <label htmlFor="e">Email</label>
              <input
                type="email"
                onChange={handelChange}
                id="e"
                name="email"
                placeholder="Enter Your Email"
                required
              />
              <label htmlFor="p">Password</label>
              <input
                type="password"
                onChange={handelChange}
                id="p"
                name="password"
                placeholder="Enter Your Password"
                required
              />
              <button type="submit" className="button-red w-[40%] mt-5">
                SignUp
              </button>
            </form>
          </div>
          <div className="max-sm:absolute z-[0] max-sm:mt-24px max-sm:ml-[-17px]">
            <img src={man2} alt="" className="w-[366px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
