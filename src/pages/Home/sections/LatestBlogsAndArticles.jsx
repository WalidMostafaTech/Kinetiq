import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../apiServices/home";
import SectionTitle from "../../../components/common/SectionTitle";
import { HiOutlineUser } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogsSkeleton = () => (
  <section className="sectionPadding container">
    <SectionTitle title="Latest Blogs & Articles" />
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-myYellow-200 shadow-xl rounded-xl overflow-hidden"
        >
          <div className="w-full h-48 bg-gray-200 animate-pulse" />
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-400">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-7 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
            <div className="h-6 w-36 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
    <div className="h-10 w-40 bg-gray-200 rounded mx-auto mt-8 animate-pulse" />
  </section>
);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LatestBlogsAndArticles = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <BlogsSkeleton />;
  if (isError) return null;

  const blogs = Array.isArray(data) ? data : [];

  return (
    <section className="sectionPadding container">
      <SectionTitle title="Latest Blogs & Articles" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="custom-swiper"
        >
          {blogs.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                custom={index}
                className="bg-myYellow-200 shadow-xl overflow-hidden rounded-xl"
              >
                <img
                  src={item.main_image_url}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-400">
                    <p className="flex items-center gap-1 text-sm">
                      <HiOutlineUser className="text-myGreen-200 text-lg" />
                      {item.author}
                    </p>

                    <p className="flex items-center gap-1 text-sm">
                      <MdDateRange className="text-myGreen-200 text-lg" />
                      {item.created_at}
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="line-clamp-3 text-sm">
                    {item.short_description}
                  </p>

                  <button className="text-myGreen-200 font-semibold flex items-center gap-1 cursor-pointer group text-sm">
                    View Details{" "}
                    <GoArrowRight className="text-xl group-hover:translate-x-2 duration-300" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="mainBtn mt-8 mx-auto block"
      >
        More Articles
      </motion.button>
    </section>
  );
};

export default LatestBlogsAndArticles;
