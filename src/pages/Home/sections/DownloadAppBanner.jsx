import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import mobilesImg from "../../../assets/images/two-mobile.png";
import appGalleryIcon from "../../../assets/images/App Gallery icon.png";
import appleIcon from "../../../assets/images/Apple logo.png";
import googleIcon from "../../../assets/images/Google Play logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DownloadAppBanner = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full p-4 bg-[#01ae9e] my-16 relative"
      id="download-app"
    >
      <div className="bg-[#01ae9e] rounded-lg max-w-5xl mx-auto">
        <div className="absolute top-0 left-0 w-1/2 lg:w-1/3 h-full bg-white/15">
          <svg
            className="absolute top-0 right-0 h-full w-20"
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C60,200 60,400 0,600 L0,800 L100,800 L100,0 Z"
              fill="#01ae9e"
            />
          </svg>
        </div>

        <div className="flex justify-center lg:justify-start relative z-10 ">
          <motion.div
            className="w-[300px] hidden lg:block absolute top-1/2 end-0 -translate-y-1/2"
            initial={{ opacity: 0, y: 50, scale: 1.1 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={mobilesImg}
              alt={t("downloadApp.imageAlt")}
              className="w-full h-full object-cover drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            className="p-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-white"
            >
              {t("downloadApp.title")}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white max-w-lg text-sm text-start"
            >
              {t("downloadApp.description")}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 w-full"
            >
              {[
                {
                  icon: appleIcon,
                  label: t("downloadApp.stores.appStore"),
                },
                {
                  icon: googleIcon,
                  label: t("downloadApp.stores.googlePlay"),
                },
                {
                  icon: appGalleryIcon,
                  label: t("downloadApp.stores.appGallery"),
                },
              ].map((btn, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white px-4 py-2 rounded font-semibold hover:bg-gray-200 duration-200 text-sm min-w-[150px] flex-1 flex items-center justify-center gap-2"
                >
                  <img src={btn.icon} alt={btn.label} />
                  {btn.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppBanner;
