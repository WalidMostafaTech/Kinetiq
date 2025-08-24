import SectionTitle from "../../../components/common/SectionTitle";

const aboutList = [
  { text: "Bringing Physical Therapy Home." },
  {
    text: "We are a home-based physical therapy platform committed to making rehabilitation easier, more personal, and more effective.",
  },
  {
    text: "Our mission is to empower individuals to recover in the comfort and safety of their own homes without the hassle of clinic visits or long waits.",
  },
  {
    text: "With a team of certified physiotherapists, our app connects you to trusted professionals who come directly to you, equipped with the tools and expertise needed to support your recovery journey.",
  },
  {
    text: "Whether you’re healing from injury, surgery, chronic pain, or mobility issues, we tailor every session to your unique needs and goals.",
  },
  {
    text: "We believe recovery should be convenient, compassionate, and close, that’s why we’re redefining physical therapy, one home visit at a time.",
  },
];
const About = () => {
  return (
    <section className="sectionPadding container">
      <SectionTitle title="About Us" position="start" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {aboutList.map((item, index) => (
          <div key={index} className="bg-myGreen-100 p-4 pt-6 rounded-lg shadow-lg">
            <div
              className="text-4xl text-blue-950 font-bold mb-8 relative
                after:content-[''] after:absolute after:top-1/2 after:start-0 
                after:translate-x-1/3 after:-translate-y-1/2 
                after:w-14 after:h-14 after:rounded-full after:bg-gray-500/20 after:z-0"
            >
              <span className="relative z-10">0{index + 1}</span>
            </div>
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
