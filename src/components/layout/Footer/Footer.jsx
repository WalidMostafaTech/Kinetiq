import logoImg from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About us", url: "/about-us" },
        { name: "Contact us", url: "/contact-us" },
      ],
    },
  ];

  const FooterComponent = ({ title, links }) => (
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              className="hover:text-myOrange-200 duration-200 text-sm font-semibold"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#389897] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 lg:w-1/3 h-full bg-white/15">
        <svg
          className="absolute top-0 right-0 h-full w-20"
          viewBox="0 0 100 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C60,200 60,400 0,600 L0,800 L100,800 L100,0 Z"
            fill="#389897"
          />
        </svg>
      </div>

      <div className="container sectionPadding relative">
        <div className="flex flex-col md:flex-row flex-wrap md:items-center justify-evenly gap-12">
          <div className="space-y-4">
            <img src={logoImg} alt="Logo" className="brightness-0 invert-100 md:w-36" />

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Reliable service for better care
              </h3>
              <p>Reliable physical therapy services anytime, anywhere.</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-xl hover:text-myOrange-200 duration-200"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="text-xl hover:text-myOrange-200 duration-200"
              >
                <RiTwitterXFill />
              </a>
              <a
                href="#"
                className="text-xl hover:text-myOrange-200 duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-xl hover:text-myOrange-200 duration-200"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <FooterComponent
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>

      <div className="text-center text-sm p-4 border-t border-gray-200 flex flex-col lg:flex-row items-center justify-evenly gap-4 relative">
        <p>Kinetiq © 2025 | All rights reserved.</p>

        <div>
          <a href="#" className="hover:text-myOrange-200 duration-200">
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-myOrange-200 duration-200">
            Terms of Service
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-myOrange-200 duration-200">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
