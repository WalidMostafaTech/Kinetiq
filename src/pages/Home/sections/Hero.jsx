import heroImg from "../../../assets/images/doctor.png";
import logoImg from "../../../assets/images/logo-final.png";
import { motion } from "framer-motion";
import {
  textContainer,
  buttons,
  doctorImage,
  logoImage,
} from "../../../animations/heroV";
import { useQuery } from "@tanstack/react-query";
import { getWebBanners } from "../../../apiServices/home";
import { Link } from "react-router-dom";

const HeroSkeleton = () => {
  return (
    <div
      className="container flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-2 items-center 
      lg:items-start text-center lg:text-start pt-24 lg:pt-44 gap-8 lg:gap-12 mb-6  md:mb-0"
    >
      {/* المحتوى - Skeleton */}
      <div className="w-full max-w-xl mx-auto lg:mx-0">
        <div className="animate-pulse space-y-4 lg:space-y-10 py-4 pb-8">
          <div className="h-10 lg:h-14 bg-gray-200 rounded w-3/4 mx-auto lg:mx-0" />
          <div className="flex gap-2 items-start lg:items-center">
            <span className="bg-gray-200 w-26 lg:w-40 h-0.5 mt-4" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
        </div>
        <div className="animate-pulse flex items-center gap-3 lg:gap-4 mx-auto lg:mx-0 w-fit">
          <div className="h-10 w-36 bg-gray-200 rounded" />
          <div className="h-10 w-44 bg-gray-200 rounded" />
        </div>
      </div>
      {/* الصور - Skeleton */}
      <div className="relative flex justify-center lg:justify-end w-full">
        <div className="absolute top-6 sm:top-10 lg:top-0 end-0 w-2/3 sm:w-1/2 lg:w-2/3 rounded-full bg-gray-100 h-36 sm:h-40 lg:h-60" />
        <div className="relative z-10 w-3/4 sm:w-2/3 lg:w-2/3 rounded-xl bg-gray-200 h-72 sm:h-80 lg:h-96" />
      </div>
    </div>
  );
};

const Hero = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["web-banners"],
    queryFn: getWebBanners,
  });

  if (isError || !data || !data.length) return null;
  const hero = Array.isArray(data) ? data[0] : null;

  return (
    <section
      id="Home"
      style={{
        background:
          "linear-gradient(to left, var(--color-myYellow-100) 50%, white 50%)",
      }}
      className="relative overflow-hidden sectionPadding scroll-smooth"
    >
      {isLoading ? (
        <HeroSkeleton />
      ) : (
        <div
          className="container flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-2 items-center lg:items-start 
          text-center lg:text-start pt-24 lg:pt-44 gap-8 lg:gap-12 mb-6 md:mb-0"
        >
          <div>
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="visible"
              className="space-y-4 lg:space-y-10 max-w-xl py-4 pb-8 mx-auto lg:mx-0"
            >
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
                {hero?.title || "YOUR PATH TO RECOVERY"}
              </h1>
              <div className="flex gap-2 items-start lg:items-center">
                {/* <span className="bg-myStone-200 w-26 lg:w-40 h-0.5 mt-4" /> */}
                <p>
                  {hero?.description ||
                    "Physical therapy is a way of life… with a touch of everyday care."}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={buttons}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 lg:gap-4 mx-auto lg:mx-0 w-fit"
            >
              <a
                href={hero?.link || "#download-app"}
                className="mainBtn orange"
              >
                {hero?.button_text || "download now"}
              </a>
              <Link to={"/appointment"} className="mainBtn orange light">
                {hero?.secondary_button_text || "make appointment"}
              </Link>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* اللوجو خلف صورة الدكتور */}
            <motion.img
              src={logoImg}
              alt="Logo"
              variants={logoImage}
              initial="hidden"
              animate="visible"
              className="absolute top-6 sm:top-10 lg:top-0 end-0 w-2/3 sm:w-1/2 lg:w-2/3 z-0 pointer-events-none"
            />
            {/* صورة الدكتور */}
            <motion.img
              src={hero?.image || heroImg}
              alt={hero?.title || "Hero"}
              variants={doctorImage}
              initial="hidden"
              animate="visible"
              className="relative z-10 w-3/4 sm:w-2/3 lg:w-2/3 md:me-auto md:ms-[-35px]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
