import { useParams } from "react-router-dom";
import { blogs } from "../../constants";
import Nav from "../Nav";
import { task } from "../../assets/icon";
import { useEffect } from "react";

const Blog = () => {
  const { id } = useParams();
  const blog = blogs[id];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="bg-main">
      <Nav />
      <div>
        {blog ? (
          <div className="container max-sm:pt-[10%] lg:pt-[5%]">
            <div className="flex justify-center items-center m-5 ">
              <img
                src={blog.image}
                alt=""
                className="red-shadow my-5 lg:w-[85%] lg:h-[350px]"
              />
            </div>
            <div className="p-7">
              <h1 className="text-3xl red font-bold">{blog.title}</h1>
              <div className="flex my-2">
                <img src={task} alt="" />
                <p className="text-[#888888] pl-1">{blog.task}</p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="service-style"
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Blog;
