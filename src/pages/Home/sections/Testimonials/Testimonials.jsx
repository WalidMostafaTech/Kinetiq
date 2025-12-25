import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../../components/common/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LoadingPage from "../../../../components/Loading/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "../../../../apiServices/home";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  const { lang } = useSelector((state) => state.language);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  const { t } = useTranslation();

  if (isLoading) return <LoadingPage />;
  if (isError || !data || !data.length) return null;

  const testimonials = Array.isArray(data) ? data : [];
  return (
    <section className="bg-myGreen-100 py-12 my-8 Testimonials">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 overflow-hidden">
        {/* Left Side (Title + Buttons) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="content-center"
        >
          <SectionTitle title={t("testimonials.title")} />

          <motion.div variants={fade} className="flex gap-3 mx-auto w-max mt-4">
            <button
              className="prevBtn text-2xl w-10 h-10 cursor-pointer flex items-center justify-center text-white duration-200
            bg-myGreen-200 rounded-full shadow hover:brightness-90 disabled:hover:brightness-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <IoIosArrowBack className="rtl:rotate-180" />
            </button>
            <button
              className="nextBtn text-2xl w-10 h-10 cursor-pointer flex items-center justify-center text-white duration-200
            bg-myGreen-200 rounded-full shadow hover:brightness-90 disabled:hover:brightness-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <IoIosArrowForward className="rtl:rotate-180" />
            </button>
          </motion.div>
        </motion.div>

        {/* Swiper */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-2"
        >
          <Swiper
            dir={lang === "ar" ? "rtl" : "ltr"}
            modules={[Navigation]}
            navigation={{
              prevEl: ".prevBtn",
              nextEl: ".nextBtn",
            }}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              1280: { slidesPerView: 1.5 },
            }}
            className="!p-7"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="testimonial-card bg-white rounded-xl shadow-md p-6 py-12 h-full transition-transform duration-300"
                >
                  <div
                    className="text-gray-700 mb-4 pb-4 border-b border-gray-300"
                    dangerouslySetInnerHTML={{ __html: item.content || "" }}
                  />

                  <div className="flex items-center gap-2">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-myGreen-200">
                        {item.name}
                      </h4>
                      <p className="text-sm">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
