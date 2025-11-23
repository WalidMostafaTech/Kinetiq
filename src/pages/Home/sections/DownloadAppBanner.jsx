import mobilesImg from "../../../assets/images/two-mobile.png";
import appGalleryIcon from "../../../assets/images/App Gallery icon.png";
import appleIcon from "../../../assets/images/Apple logo.png";
import googleIcon from "../../../assets/images/Google Play logo.png";

const DownloadAppBanner = () => {
  return (
    <section className="w-full p-4 max-w-5xl mx-auto my-16">
      <div className="bg-[#01ae9e] rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 lg:w-1/3 h-full bg-white/15">
          <svg
            className="absolute top-0 right-0 h-full w-20"
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C60,200 60,400 0,600 L0,800 L100,800 L100,0 Z"
              fill="#01ae9e"
            />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center md:items-end justify-between relative z-10">
          <div className="w-[90%] sm:w-[40%] overflow-hidden hidden md:block">
            <img
              src={mobilesImg}
              alt="Download App"
              className="w-full h-full object-cover md:translate-y-1/3 md:scale-150"
            />
          </div>

          <div className="p-6 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h2 className="text-3xl font-bold text-white">
              Download the Kinetiq App
            </h2>

            <p className="text-white max-w-lg text-sm">
              Easily book certified physical therapy home visits anytime,
              anywhere. Get personalized care from trusted therapists, track
              your recovery progress, and stay on top of your health—all from
              the comfort of your home.
            </p>

            <div className="flex flex-wrap gap-4 w-full">
              <a
                href="#"
                className="bg-white px-4 py-2 rounded font-semibold hover:bg-gray-200 duration-200 text-sm min-w-[150px] flex-1 flex items-center justify-center gap-2"
              >
                <img src={appleIcon} alt="Apple" />
                App Store
              </a>

              <a
                href="#"
                className="bg-white px-4 py-2 rounded font-semibold hover:bg-gray-200 duration-200 text-sm min-w-[150px] flex-1 flex items-center justify-center gap-2"
              >
                <img src={googleIcon} alt="Google Play" />
                Google Play
              </a>

              <a
                href="#"
                className="bg-white px-4 py-2 rounded font-semibold hover:bg-gray-200 duration-200 text-sm min-w-[150px] flex-1 flex items-center justify-center gap-2"
              >
                <img src={appGalleryIcon} alt="AppGallery" />
                AppGallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppBanner;
