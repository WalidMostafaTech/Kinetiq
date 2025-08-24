import SectionTitle from "../../../components/common/SectionTitle";
import calendarIcon from "../../../assets/icons/calendar 3.png";
import hospitalIcon from "../../../assets/icons/hospital 2.png";
import medicalPrescriptionIcon from "../../../assets/icons/medical-prescription 2.png";
import jobIcon from "../../../assets/icons/job 2.png";
import doctorIcon from "../../../assets/icons/doctor 2.png";
import exerciseIcon from "../../../assets/icons/exercise 2.png";

const servicesList = [
  {
    title: "Book an appointment",
    description:
      "Choose your preferred time wether it’s a home visit or at clinic",
    icon: calendarIcon,
  },
  {
    title: "Clinics",
    description:
      "Specialized clinics offering high-quality medical care by experienced professionals.",
    icon: hospitalIcon,
  },
  {
    title: "Medical records",
    description:
      "Secure and organized access to your complete medical history anytime you need it.",
    icon: medicalPrescriptionIcon,
  },
  {
    title: "Case progression",
    description:
      "Track the progression of your condition with detailed updates and continuous care.",
    icon: jobIcon,
  },
  {
    title: "Ask your doctor",
    description: "Share concerns and receive professional guidance.",
    icon: doctorIcon,
  },
  {
    title: "Exercises",
    description:
      "Step-by-step exercises with clear demonstrations for correct technique.",
    icon: exerciseIcon,
  },
];

const Services = () => {
  return (
    <section className="sectionPadding container">
      <SectionTitle title="Find Out More About Our Services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesList.map((item, index) => (
          <div
            key={index}
            className="bg-myGreen-100 p-4 rounded-lg shadow-lg flex flex-col items-center gap-4 text-center"
          >
            <div className="flex items-center justify-center p-4 rounded-full bg-myGreen-200 shadow-md">
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

export default Services;
