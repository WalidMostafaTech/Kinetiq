import SectionTitle from "../../../components/common/SectionTitle";
import { LuShield } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const icons = [
  <LuShield />,
  <IoMdTime />,
  <GoPeople />,
  <LiaCertificateSolid />,
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const WhyChooseUs = () => {
  const { t } = useTranslation();
    const { lang } = useSelector((state) => state.language);


  // مهم جدًا returnObjects: true علشان ترجع مصفوفة مش نص
  const items = t("whyChooseUs.items", { returnObjects: true });

  return (
    <section className="sectionPadding container">
      <SectionTitle title={t("whyChooseUs.title")} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <Swiper
          dir={lang === "ar" ? "rtl" : "ltr"}
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 flex flex-col items-center gap-4 text-center group">
                <div className="flex items-center justify-center p-4 rounded-full bg-myGreen-200 shadow-md group-hover:scale-120 duration-300">
                  <span className="text-3xl text-white">{icons[index]}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.paragraph}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
