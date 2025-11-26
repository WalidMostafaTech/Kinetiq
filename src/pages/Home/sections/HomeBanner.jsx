import { Link } from "react-router-dom";
import img from "../../../assets/images/bg.jpg";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const HomeBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundImage: `url(${img})`,
        fontFamily: "Cairo, sans-serif",
      }}
      className="bg-cover bg-center bg-no-repeat h-[60vh] lg:h-[80vh]"
    >
      <div className="bg-gradient-to-r from-myGreen-200 via-myGreen-200/90 to-black/40 w-full h-full p-4 flex flex-col items-start md:items-center justify-center gap-12">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white text-2xl md:text-4xl font-bold text-start md:text-center max-w-4xl leading-relaxed pt-40"
        >
          Join Kinetiq doctors and get our services through the website and
          the mobile application.
        </motion.h2>

        {/* BUTTON */}
        <MotionLink
          to="/join-us"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-myOrange-200 text-white text-2xl min-w-[200px] text-center font-bold py-2 px-4 rounded-lg"
        >
          Join Now
        </MotionLink>
      </div>
    </motion.section>
  );
};

export default HomeBanner;
