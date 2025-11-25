import img from "../../../assets/images/bg.jpg";
import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        backgroundImage: `url(${img})`,
        fontFamily: "Cairo, sans-serif",
      }}
      className="bg-cover bg-center bg-no-repeat h-[40vh] lg:h-[60vh]"
    >
      <div className="bg-black/40 w-full h-full p-4 flex flex-col items-center justify-center gap-12">
        {/* BUTTON */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-myGreen-200 bg-white text-2xl min-w-[200px] text-center font-bold py-2 px-4 rounded-lg"
        >
          Join Now
        </motion.a>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white text-2xl md:text-4xl font-bold text-center max-w-4xl leading-relaxed"
        >
          Join El-Esbatelia doctors and get our services through the website and
          the mobile application.
        </motion.h2>
      </div>
    </motion.section>
  );
};

export default HomeBanner;
