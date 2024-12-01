import ScrollTOTop from "../../components/ScrollTOTop";
import BlogPosts from "../BlogPosts";
import FAQ from "../FAQ";
import Footer from "../Footer";
import LandingPage from "../LandingPage";
import Nav from "../Nav";
import OurCommunity from "../OurCommunity";
import OurfitnessTools from "../OurfitnessTools";
import OurPlans from "../OurPlans";
import OurServices from "../OurServices";
import OurTrainers from "../OurTrainers";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <main className="bg-main">
      <ScrollTOTop/>
      <Nav />
      <section className="relative">
        <LandingPage />
      </section>
      <section>
        <OurServices />
      </section>
      <section>
        <OurPlans />
      </section>
      <section>
        <OurfitnessTools />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <OurTrainers />
      </section>
      <section>
        <BlogPosts />
      </section>
      <section>
        <OurCommunity />
      </section>
      <section>
        <FAQ />
      </section>
      <footer className="bg-[#181818]">
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
