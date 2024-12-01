import { facebook, instagram, X, youtube } from "../assets/icon";
import { logo } from "../assets/images";
import { Contact, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="container py-10 flex gap-10 max-sm:flex-col p-5">
      <div>
        <img src={logo} alt="logo" />
        <p className="text-[#888888] py-5 max-sm:text-sm">
          Transform Your Body with FitMaker, Your Trusted Partner in Fitness.
          With Over <span className="text-[#cf0d13]">5 Years</span> of
          Experience, We Offer Expert Coaching, Tailored Workout Plans, and
          Comprehensive Nutritional Guidance.{" "}
          <span className="text-[#c94b17]"> Join Our Community </span>
          and Start Your Journey Towards a Healthier, Stronger You. Ready to
          Make a Change?
        </p>
        <div className="flex gap-5 px-2">
          <img
            src={facebook}
            alt="facebook"
            className="serv-hover cursor-pointer"
          />
          <img src={X} alt="X" className="serv-hover cursor-pointer" />
          <img
            src={instagram}
            alt="instagram"
            className="serv-hover cursor-pointer"
          />
          <img
            src={youtube}
            alt="youtube"
            className="serv-hover cursor-pointer"
          />
        </div>
      </div>

      <div className="flex max-sm:flex-wrap">
        {footerLinks.map((e) => {
          return (
            <div key={e.links}>
              <h1 className="text-[#cf0d13] text-xl font-bold lg:px-5 mb-7">
                {e.title}
              </h1>
              <div>
                {e.links.map((e) => {
                  return (
                    <ul key={e.name} className="px-5 text-center mb-4">
                      <li>
                        <a
                          href={e.link}
                          className="text-[#888888] max-sm:text-sm"
                        >
                          {e.name}
                        </a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h1 className="text-[#c94b17] text-xl font-bold  px-5 mb-7">
          Contact Us
        </h1>
        <div>
          {Contact.map((e) => {
            return (
              <div key={e.icon} className="flex px-5 mb-7 text-[#888888] gap-3">
                <img
                  src={e.icon}
                  alt="location"
                  className="serv-hover cursor-pointer"
                />
                <a href="/">{e.p}</a>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
