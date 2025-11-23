import SectionTitle from "../../../components/common/SectionTitle";
import LoadingPage from "../../../components/Loading/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { getFeatures } from "../../../apiServices/home";

const Services = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["features"],
    queryFn: getFeatures,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return null;
  }

  const servicesList = Array.isArray(data) ? data : [];

  return (
    <section className="sectionPadding container">
      <SectionTitle title="Find Out More About Our Services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesList.map((item, index) => (
          <div
            key={item.id ?? index}
            className="bg-myGreen-100 p-4 rounded-lg shadow-lg flex flex-col items-center gap-4 text-center"
          >
            <div className="flex items-center justify-center p-6 rounded-full bg-myGreen-200 shadow-md">
              <img src={item.icon} alt={item.title} className="w-18" />
            </div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
