import logoImg from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const Links1 = [
    {
      title: "Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About us", url: "/about-us" },
        { name: "Contact us", url: "/contact-us" },
      ],
    },
  ];
  const Links2 = [
    {
      title: "Quick Links",
      links: [
        { name: "Appointment", url: "/appointment" },
        { name: "join us", url: "/join-us" },
      ],
    },
  ];

  const FooterComponent = ({ title, links }) => (
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.url}
              className="hover:text-myOrange-200 duration-200 text-sm font-semibold"
            >
              {link.name}
            </Link>
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
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-12">
          <div className="space-y-4">
            <img
              src={logoImg}
              alt="Logo"
              className="brightness-0 invert-100 md:w-36"
            />

            <div className="max-w-sm">
              <h3 className="text-2xl font-semibold mb-2">
                Reliable service for better care
              </h3>
              <p>Reliable physical therapy services anytime, anywhere.</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61581750415372"
                className="text-2xl hover:text-myOrange-200 duration-200"
              >
                <FiFacebook />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/kinetiq.egy?igsh=MWxsd3lyMzhubDFzbg=="
                className="text-2xl hover:text-myOrange-200 duration-200"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@kinetiq.egy?_r=1&_t=ZS-91inPpa546L"
                className="text-2xl hover:text-myOrange-200 duration-200"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {Links1.map((section, index) => (
            <FooterComponent
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          {Links2.map((section, index) => (
            <FooterComponent
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>

      <div className="container text-center text-sm py-4 border-t border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-4 relative">
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
