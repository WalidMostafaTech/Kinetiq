import SectionTitle from "../../../components/common/SectionTitle";
import calendarIcon from "../../../assets/icons/calendar 4.png";
import checkListIcon from "../../../assets/icons/check-list 2.png";
import personalizedMedicineIcon from "../../../assets/icons/personalized-medicine 2.png";

const howWeWorkList = [
  {
    title: "Book a session",
    description:
      "Choose your preferred time wether it’s a home visit or at clinic.",
    icon: calendarIcon,
  },
  {
    title: "Assessment and Evaluation",
    description:
      "A professional full check- up to identify pain points, limitations, and therapy needs.",
    icon: checkListIcon,
  },
  {
    title: "Personalized therapy plan",
    description:
      "We design a step-by-step plan that fits your lifestyle, helping you recover safely and steadily.",
    icon: personalizedMedicineIcon,
  },
];
const HowWeWork = () => {
  return (
    <section className="sectionPadding container">
      <SectionTitle
        title="Let’s See How We Work"
        subTitle={
          "Our process is built around your needs, ensuring clarity, care, and confidence every step of the way."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {howWeWorkList.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col items-center gap-4 text-center"
          >
            <div className="flex items-center justify-center p-4 rounded-full bg-myGreen-100 shadow-md">
              <img src={item.icon} alt={item.title} width="100%" />
            </div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
