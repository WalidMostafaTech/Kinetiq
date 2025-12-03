import { useState, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import logoImg from "../../../assets/images/logo.png";
import { GoArrowRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const headerRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const linksList = [
    { name: "Home", path: "#Home" },
    { name: "Contact Us", path: "#contact-us" },
    { name: "About Us", path: "#about-us" },
  ];

  const handleNavClick = (e, link) => {
    if (link.path.startsWith("#")) {
      e.preventDefault();
      setActiveNav(false);
      const targetId = link.path.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate(`/${link.path}`);
      }
      return;
    }
    setActiveNav(false);
  };

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-2xl duration-700 ${
        activeNav ? "shadow-lg lg:shadow-none" : ""
      }`}
      ref={headerRef}
    >
      <div
        className={`container flex flex-col lg:flex-row items-center justify-between gap-4 py-2 lg:py-12
            overflow-hidden transition-all duration-500 ease-in-out max-h-[60px] ${
              activeNav ? "max-h-[500px] lg:max-h-[60px]" : ""
            }`}
      >
        <div className="flex items-center justify-between gap-2 w-full lg:w-auto">
          <img
            loading="lazy"
            src={logoImg}
            alt="Logo"
            className="w-20 lg:w-28"
          />
          <span className="text-3xl cursor-pointer lg:hidden">
            {activeNav ? (
              <IoClose onClick={() => setActiveNav(false)} />
            ) : (
              <HiMenu onClick={() => setActiveNav(true)} />
            )}
          </span>
        </div>

        <nav className="flex flex-col items-center lg:flex-row gap-4 lg:gap-8">
          {linksList.map((link) => (
            <NavLink
              to={link.path}
              key={link.name}
              className={({ isActive }) => {
                const isHashActive =
                  link.path.startsWith("#") &&
                  location.pathname === "/" &&
                  location.hash === link.path;
                return `navLink ${
                  isActive || isHashActive ? "active-old" : ""
                }`;
              }}
              onClick={(e) => handleNavClick(e, link)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/join-us"
          className="mainBtn"
          onClick={(e) => handleNavClick(e, { path: "join-us" })}
        >
          Join Us <GoArrowRight />
        </Link>
      </div>
    </header>
  );
};

export default Header;
