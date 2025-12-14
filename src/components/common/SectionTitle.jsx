import { motion } from "framer-motion";

const SectionTitle = ({ title, subTitle, position = "center" }) => {
  return (
    <motion.hgroup
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className={`mb-6 lg:mb-10 ${
        position === "start" ? "lg:text-start" : "text-center"
      }`}
    >
      <h2
        className={`text-3xl lg:text-4xl font-bold w-fit mx-auto
    bg-gradient-to-l from-myOrange-200 to-myGreen-200 bg-clip-text text-transparent
  `}
      >
        {title}
      </h2>
      {subTitle && (
        <p
          className={`lg:text-xl text-center mt-2 max-w-2xl ${
            position === "start" ? "lg:text-start" : "mx-auto"
          }`}
        >
          {subTitle}
        </p>
      )}
    </motion.hgroup>
  );
};

export default SectionTitle;
