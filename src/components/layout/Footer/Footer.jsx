import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logoImg from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-myStone-200 text-white sectionPadding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg w-fit">
              <img
                src={logoImg}
                alt="Logo"
                // className="brightness-0 invert-100"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Reliable service for better care
              </h3>
              <p>Reliable physical therapy services anytime, anywhere.</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-3xl hover:text-myGreen-200 duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-myGreen-200 duration-200"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-3xl hover:text-myGreen-200 duration-200"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Pages</h3>
            <ul className="mt-4 flex flex-col gap-2">
              <Link to="/" className="hover:text-myGreen-200 duration-200">
                Home
              </Link>
              <Link
                to="/about-us"
                className="hover:text-myGreen-200 duration-200"
              >
                About-Us
              </Link>
              <Link
                to="/contact-us"
                className="hover:text-myGreen-200 duration-200"
              >
                Contact-Us
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Terms</h3>
            <ul className="mt-4 flex flex-col gap-2">
              <Link
                to="/about-us"
                className="hover:text-myGreen-200 duration-200"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/about-us"
                className="hover:text-myGreen-200 duration-200"
              >
                Privacy Policy
              </Link>
            </ul>
          </div>
        </div>

        <p className="text-center mt-8 pt-8 border-t border-gray-200">
          Physiotherapy App © 2025 | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
