import SectionTitle from "../../../components/common/SectionTitle";
import { HiOutlineUser } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../../apiServices/home";
import { motion } from "framer-motion";

const BlogsSkeleton = () => {
  return (
    <section className="sectionPadding container">
      <SectionTitle title="Latest Blogs & Articles" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-myYellow-200 shadow-xl">
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
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-myYellow-200 shadow-xl overflow-hidden rounded-xl"
          >
            <div>
              <img
                src={item.main_image_url}
                alt={item.title}
                width="100%"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-400">
                <p className="flex items-center gap-1">
                  <HiOutlineUser className="text-myGreen-200 text-2xl" />
                  {item.author}
                </p>

                <p className="flex items-center gap-1">
                  <MdDateRange className="text-myGreen-200 text-2xl" />
                  {item.created_at}
                </p>
              </div>

              <h3 className="text-2xl font-semibold line-clamp-2">
                {item.title}
              </h3>

              <p className="line-clamp-3">{item.short_description}</p>

              <button className="text-myGreen-200 font-semibold flex items-center gap-2 cursor-pointer group">
                View Details{" "}
                <GoArrowRight className="text-3xl group-hover:translate-x-3 duration-200" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

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
