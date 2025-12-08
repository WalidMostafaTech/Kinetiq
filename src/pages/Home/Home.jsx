import About from "./sections/About";
import Hero from "./sections/Hero";
import HeroServices from "./sections/HeroServices";
import Testimonials from "./sections/Testimonials/Testimonials";
import HowWeWork from "./sections/HowWeWork";
import LatestBlogsAndArticles from "./sections/LatestBlogsAndArticles";
import Services from "./sections/Services";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactUs from "./sections/ContactUs";
import DownloadAppBanner from "./sections/DownloadAppBanner";
import WhyChooseUs from "./sections/WhyChooseUs";
import HomeBanner from "./sections/HomeBanner";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);

  return (
    <article>
      <Hero />
      <HeroServices />
      <Services />
      <HomeBanner />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <HowWeWork />
      <DownloadAppBanner />
      <LatestBlogsAndArticles />
      <ContactUs />
    </article>
  );
};

export default Home;
