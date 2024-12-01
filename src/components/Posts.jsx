import { Link } from "react-router-dom";
import { task } from "../assets/icon";
import { blogs } from "../constants"

const Posts = () => {
  return (
    <div className="grid grid-cols-12  lg:grid-rows-2 container py-5">
      {blogs.map((e,index)=>{
        const main = index === 0;
        return (
          <Link
            to={`/blog/${index}`}
            key={e.task}
            style={{
              backgroundImage: `url(${e.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={` m-5 rounded-lg flex flex-col items-start justify-end lg:p-5 max-sm:p-2 cursor-pointer duration-[.3s] serv-hover ${
              main
                ? " col-span-6 row-span-2 h-[343px] max-sm:row-span-1 max-sm:col-span-12"
                : "col-span-3 h-[150px] max-sm:col-span-6"
            }`}
          >
            <h1 className="text-white pb-1">{e.title}</h1>
            <div className="flex">
              <img src={task} alt="" className="max-sm:w-[20%]" />
              <p className="text-white text-sm pl-1 max-md:text-[11px] ">{e.task}</p>
            </div>
          </Link>
        );
      })}
    </div>
  )
}

export default Posts