import SectionTitle from "../../../components/common/SectionTitle";
import image1 from "../../../assets/images/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo 1.png";
import image2 from "../../../assets/images/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo 1.png";
import image3 from "../../../assets/images/doctor-posing-portrait-free-photo 1.png";
import { HiOutlineUser } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const blogsAndArticlesList = [
  {
    title: "New Technology Make for Pulmonary Operation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image1,
    name: "Noran walid",
    date: "Aug 20, 2023",
  },
  {
    title: "New Technology Make for Pulmonary Operation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image2,
    name: "Noran walid",
    date: "Aug 20, 2023",
  },
  {
    title: "New Technology Make for Pulmonary Operation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image3,
    name: "Noran walid",
    date: "Aug 20, 2023",
  },
];
const LatestBlogsAndArticles = () => {
  return (
    <section className="sectionPadding container">
      <SectionTitle title="Latest Blogs & Articles" />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {blogsAndArticlesList.map((item, index) => (
          <div key={index} className="bg-myYellow-200 shadow-xl">
            <div>
              <img src={item.image} alt={item.title} width="100%" />
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-400">
                <p className="flex items-center gap-1">
                  <HiOutlineUser className="text-myGreen-200 text-2xl" />
                  {item.name}
                </p>

                <p className="flex items-center gap-1">
                  <MdDateRange className="text-myGreen-200 text-2xl" />
                  {item.date}
                </p>
              </div>

              <h3 className="text-2xl font-semibold line-clamp-2">
                {item.title}
              </h3>

              <p className="line-clamp-3">{item.description}</p>

              <button className="text-myGreen-200 font-semibold flex items-center gap-2 cursor-pointer group">
                View Details{" "}
                <GoArrowRight className="text-3xl group-hover:translate-x-3 duration-200" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mainBtn mt-8 mx-auto">More Articles</button>
    </section>
  );
};

export default LatestBlogsAndArticles;
