import { motion } from "framer-motion";
import { container, card, textBlock } from "../../../animations/heroServicesV";
import { useQuery } from "@tanstack/react-query";
import { getServiceHighlights } from "../../../apiServices/home";

const HeroServicesSkeleton = () => {
  return (
    <section className="bg-myGreen-200">
      <div className="container p-4 lg:py-8 flex flex-col xl:flex-row-reverse items-start justify-between gap-4 xl:gap-20">
        <div className="text-white w-full xl:w-auto">
          <div className="h-7 lg:h-9 bg-white/30 rounded w-72 mb-2 lg:mb-4 animate-pulse" />
          <div className="h-4 bg-white/20 rounded w-56 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 w-full">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4 rounded-md bg-myYellow-200 even:bg-myOrange-200 even:text-white text-myStone-200 flex flex-col items-center gap-2 even:xl:-translate-y-20">
              <div className="w-16 h-16 rounded-full bg-white/60 animate-pulse" />
              <div className="h-5 w-24 bg-white/70 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroServices = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["service-highlights"],
    queryFn: getServiceHighlights,
  });

  const mainTitle = data?.main_title || "Integrated physical therapy services";
  const description = data?.description || "Experience with a human touch";
  const items = Array.isArray(data?.service_highlights) ? data.service_highlights : [];

  if (isLoading) {
    return <HeroServicesSkeleton />;
  }

  return (
    <section className="bg-myGreen-200">
      <div className="container p-4 lg:py-8 flex flex-col xl:flex-row-reverse items-start justify-between gap-4 xl:gap-20">
        <motion.div
          variants={textBlock}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-white"
        >
          <h3 className="text-3xl lg:text-4xl mb-2 lg:mb-4">
            {mainTitle}
          </h3>
          <p>{description}</p>
        </motion.div>

        {/* الكروت */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 w-full"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
              className="p-4 rounded-md bg-myYellow-200 even:bg-myOrange-200 even:text-white text-myStone-200 flex flex-col items-center gap-2 even:xl:-translate-y-20"
            >
              <img src={item.icon} alt={item.title} />
              <p className="text-lg font-medium">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroServices;
