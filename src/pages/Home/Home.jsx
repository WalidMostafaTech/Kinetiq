import About from "./sections/About";
import Hero from "./sections/Hero";
import HeroServices from "./sections/HeroServices";
import Testimonials from "./sections/Testimonials/Testimonials";
import HowWeWork from "./sections/HowWeWork";
import LatestBlogsAndArticles from "./sections/LatestBlogsAndArticles";
import Services from "./sections/Services";

const Home = () => {
  return (
    <article>
      <Hero />
      <HeroServices />
      <About />
      <Services />
      <Testimonials />
      <HowWeWork />
      <LatestBlogsAndArticles />
    </article>
  );
};

export default Home;
