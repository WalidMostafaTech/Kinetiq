import heroImg from "../../../assets/images/doctor.png";

const Hero = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(to left, var(--color-myYellow-100) 50%, white 50%)",
      }}
    >
      <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start text-center lg:text-start pt-24 lg:pt-52">
        <div className="space-y-4 lg:space-y-12 max-w-lg py-4 pb-8">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
            YOUR PATH TO RECOVERY
          </h1>
          <div className="flex gap-2">
            <span className="bg-myStone-200 w-26 lg:w-40 h-0.5 mt-4" />
            <p>
              Physical therapy is a way of life… with a touch of everyday care.
            </p>
          </div>
          <div className="flex items-center gap-4 mx-auto w-fit">
            <button className="mainBtn orange">download now</button>
            <button className="mainBtn orange light">make appointment</button>
          </div>
        </div>

        <img src={heroImg} alt="Hero" className="w-1/2 lg:w-1/3 lg:ms-56" />
      </div>
    </section>
  );
};

export default Hero;
