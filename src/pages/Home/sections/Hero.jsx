import heroImg from "../../../assets/images/doctor.png";
import logoImg from "../../../assets/images/logo-final-(1)[1] 1.png";
import { motion } from "framer-motion";
import {
  textContainer,
  buttons,
  doctorImage,
  logoImage,
} from "../../../animations/heroV";

const Hero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(to left, var(--color-myYellow-100) 50%, white 50%)",
      }}
      className="relative overflow-hidden"
    >
      <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start text-center lg:text-start pt-24 lg:pt-52">
        {/* النصوص */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4 lg:space-y-12 max-w-lg py-4 pb-8"
        >
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
            YOUR PATH TO RECOVERY
          </h1>
          <div className="flex gap-2">
            <span className="bg-myStone-200 w-26 lg:w-40 h-0.5 mt-4" />
            <p>
              Physical therapy is a way of life… with a touch of everyday care.
            </p>
          </div>

          <motion.div
            variants={buttons}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mx-auto w-fit"
          >
            <button className="mainBtn orange">download now</button>
            <button className="mainBtn orange light">make appointment</button>
          </motion.div>
        </motion.div>

        {/* صورة الدكتور */}
        <motion.img
          src={heroImg}
          alt="Hero"
          variants={doctorImage}
          initial="hidden"
          animate="visible"
          className="w-1/2 lg:w-1/3 lg:ms-56 relative z-10"
        />

        {/* اللوجو */}
        <motion.img
          src={logoImg}
          alt="Logo"
          variants={logoImage}
          initial="hidden"
          animate="visible"
          className="w-1/2 absolute top-20 lg:top-10 xl:top-0 end-0"
        />
      </div>
    </section>
  );
};

export default Hero;
