import img from "../../../assets/images/banner-img2.png";

const HomeBanner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
        fontFamily: "Cairo, sans-serif",
      }}
      className="bg-cover bg-center bg-no-repeat h-[40vh] lg:h-[60vh]"
    >
      <div className="bg-black/40 w-full h-full p-4 flex flex-col items-center justify-center gap-12">
        <a
          href="#"
          className="text-myGreen-200 bg-white text-2xl min-w-[200px] text-center font-bold py-2 px-4 rounded-lg"
        >
          انضم الآن
        </a>

        <h2 className="text-white text-2xl md:text-4xl font-bold text-center max-w-4xl leading-relaxed">
          انضم إلى دكاترة الإسبتالية واحصل على خدماتنا من خلال الموقع والتطبيق
          الإلكتروني
        </h2>
      </div>
    </section>
  );
};

export default HomeBanner;
