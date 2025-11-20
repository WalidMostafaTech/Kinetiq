import SectionTitle from "../../../components/common/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { getHowWeWork } from "../../../apiServices/home";
const HowWeWorkSkeleton = () => {
  return (
    <section className="sectionPadding container">
      <SectionTitle title="Let’s See How We Work" />
      <div className="h-5 w-3/4 md:w-2/3 lg:w-1/2 bg-gray-200 rounded animate-pulse mt-2 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-4 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center justify-center p-6 rounded-full bg-gray-100 shadow-md animate-pulse w-24 h-24" />
            <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
};

const HowWeWork = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["how-we-work"],
    queryFn: getHowWeWork,
  });

  if (isLoading) return <HowWeWorkSkeleton />;
  if (isError) return null;

  const subTitle = data?.main_title || undefined;
  const items = Array.isArray(data?.work_processes) ? data.work_processes : [];

  return (
    <section className="sectionPadding container">
      <SectionTitle
        title="Let’s See How We Work"
        subTitle={subTitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 flex flex-col items-center gap-4 text-center"
          >
            <div className="flex items-center justify-center p-4 rounded-full bg-myGreen-100 shadow-md">
              <img src={item.icon} alt={item.title} width="100%" className="max-w-20 p-2" />
            </div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
