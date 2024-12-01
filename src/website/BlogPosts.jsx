import { useState } from "react";
import { arrow_button, arrow_button_up } from "../assets/icon";
import Posts from "../components/Posts";

const BlogPosts = () => {
  const [click, setClick] = useState(false);
  return (
    <section>
      <div className="speacial-heading">
        <h1>
          <span>What Our</span> Blog Posts
        </h1>
        <p>
          At This Part you can See Few Of The Many Positive reviews Of Our
          Customers.
        </p>
      </div>
      <Posts />
      <dir className={`${click ? "" : " hidden"}`}>
        <Posts />
      </dir>

      <div
        className=" flex justify-center cursor-pointer w-[1005] p-5 "
        onClick={() => (click ? setClick(false) : setClick(true))}
      >
        <div className={`button-or text-md flex gap-2 ${click && "hidden"}`}>
          <a>View All </a>
          <img src={arrow_button} alt="arrow button" className=" p-1" />
        </div>

        <div
          className={`button-or text-[#cf0d13] border-[#cf0d13] text-md flex gap-2 ${
            click ? "" : "hidden"
          }`}
        >
          <a>Shrink</a>
          <img src={arrow_button_up} alt="arrow button" className=" p-1" />
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
