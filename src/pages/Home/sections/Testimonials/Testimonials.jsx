import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../../components/common/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LoadingPage from "../../../../components/Loading/LoadingPage";
import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "../../../../apiServices/home";

const Testimonials = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return null;
  }

  const testimonials = Array.isArray(data) ? data : [];

  return (
    <section className="bg-myGreen-100 py-12 my-8 Testimonials">
      <div className="container grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 overflow-hidden">
        <div className="content-center">
          <SectionTitle title="What patients say about Kinetiq" />
          <div className="flex gap-3 mx-auto w-max mt-4">
            <button className="prevBtn text-2xl w-10 h-10 cursor-pointer flex items-center justify-center text-white bg-myGreen-200 rounded-full shadow hover:brightness-90">
              <IoIosArrowBack />
            </button>
            <button className="nextBtn text-2xl w-10 h-10 cursor-pointer flex items-center justify-center text-white bg-myGreen-200 rounded-full shadow hover:brightness-90">
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="xl:col-span-2">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".prevBtn",
              nextEl: ".nextBtn",
            }}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              1280: { slidesPerView: 1.5 },
            }}
            className="!p-7"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card bg-white rounded-xl shadow-md p-6 py-12 h-full transition-transform duration-300">
                  <div
                    className="text-gray-700 mb-4 pb-4 border-b border-gray-300"
                    dangerouslySetInnerHTML={{ __html: item.content || "" }}
                  />
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-myGreen-200">
                        {item.name}
                      </h4>
                      <p className="text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
