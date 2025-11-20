import SectionTitle from "../../../components/common/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getAboutUsBoxes } from "../../../apiServices/home";

const AboutSkeleton = () => {
  return (
    <section id="about-us" className="sectionPadding container">
      <SectionTitle title="About Us" position="start" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-myGreen-100 p-4 pt-6 rounded-lg shadow-lg">
            <div className="mb-8 flex items-center">
              <span className="inline-block w-14 h-14 rounded-full bg-gray-200 animate-pulse" />
              <span className="ms-4 h-6 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["about-us-boxes"],
    queryFn: getAboutUsBoxes,
  });

  if (isLoading) {
    return <AboutSkeleton />;
  }

  if (isError) {
    return null;
  }

  const aboutList = Array.isArray(data) ? data : [];

  return (
    <section className="sectionPadding container scroll-smooth" id="about-us">
      <SectionTitle title="About Us" position="start" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {aboutList.map((item, index) => (
          <div
            key={item.id ?? index}
            className="relative bg-myGreen-100 p-4 pt-6 rounded-lg shadow-lg min-h-[230px] flex items-center justify-center"
          >
            <div
              className="absolute top-7 left-5 text-4xl text-blue-950 font-bold 
                after:content-[''] after:absolute after:top-1/2 after:left-0 
                after:translate-x-1/3 after:-translate-y-1/2 
                after:w-14 after:h-14 after:rounded-full after:bg-gray-500/20 after:z-0"
            >
              <span className="relative z-10">0{index + 1}</span>
            </div>
            <p className="text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
