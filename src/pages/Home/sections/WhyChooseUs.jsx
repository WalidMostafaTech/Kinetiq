import SectionTitle from "../../../components/common/SectionTitle";
import { LuShield } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const WhyChooseUs = () => {
  const items = [
    {
      id: 1,
      icon: <LuShield />,
      title: "Verified Doctors",
      paragraph: "All doctors are licensed and verified",
    },
    {
      id: 2,
      icon: <IoMdTime />,
      title: "Quick Booking",
      paragraph: "Book appointments in under 60 seconds",
    },
    {
      id: 3,
      icon: <GoPeople />,
      title: "Patient Support",
      paragraph: "24/7 support for all your needs",
    },
    {
      id: 4,
      icon: <LiaCertificateSolid />,
      title: "Quality Care",
      paragraph: "Top-rated healthcare professionals",
    },
  ];

  return (
    <section className="sectionPadding container">
      <SectionTitle title="Why Choose Us" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <Swiper
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
            <SwiperSlide key={item.id}>
              <div className="p-4 flex flex-col items-center gap-4 text-center">
                <div className="flex items-center justify-center p-4 rounded-full bg-myGreen-200 shadow-md">
                  <span className="text-3xl text-white">{item.icon}</span>
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
