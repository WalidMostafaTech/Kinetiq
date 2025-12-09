import { motion } from "framer-motion";
import SectionTitle from "../../../components/common/SectionTitle";
import LoadingPage from "../../../components/Loading/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { getFeatures } from "../../../apiServices/home";
import { useTranslation } from "react-i18next";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["features"],
    queryFn: getFeatures,
  });

  if (isLoading) return <LoadingPage />;
  if (isError) return null;

  const servicesList = Array.isArray(data) ? data : [];

  return (
    <section className="sectionPadding container">
      <SectionTitle title={t("services.title")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesList.map((item, index) => (
          <motion.div
            key={item.id ?? index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-myGreen-100 p-4 rounded-lg shadow-lg flex flex-col items-center gap-4 text-center cursor-pointer group"
          >
            <div className="flex items-center justify-center p-6 rounded-full bg-myGreen-200 shadow-md group-hover:rotate-12 duration-300">
              <img src={item.icon} alt={item.title} className="w-16" />
            </div>

            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p>{item.paragraph}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
