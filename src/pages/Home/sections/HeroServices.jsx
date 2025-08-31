import medicalTeamIcon from "../../../assets/icons/medical-team 3.png";
import shelterIcon from "../../../assets/icons/shelter 2.png";
import medicalAppointmentIcon from "../../../assets/icons/medical-appointment 3.png";
import { motion } from "framer-motion";
import { container, card, textBlock } from "../../../animations/heroServicesV";

const heroServicesList = [
  {
    title: "Safe home care",
    icon: medicalTeamIcon,
  },
  {
    title: "Safe home care",
    icon: shelterIcon,
  },
  {
    title: "Safe home care",
    icon: medicalAppointmentIcon,
  },
];

const HeroServices = () => {
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
            Integrated physical therapy services
          </h3>
          <p>Experience with a human touch</p>
        </motion.div>

        {/* الكروت */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 w-full"
        >
          {heroServicesList.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className="p-4 rounded-md bg-myYellow-200 even:bg-myOrange-200 even:text-white text-myStone-200 flex flex-col items-center gap-2 even:xl:-translate-y-20"
            >
              <img src={item.icon} alt="Services" />
              <p className="text-lg font-medium">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroServices;
