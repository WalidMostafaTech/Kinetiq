import React from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import { LuShield } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { LiaCertificateSolid } from "react-icons/lia";

const WhyChooseUs = () => {
  const items = [
    {
      id: 1,
      icon: <LuShield />,
      title: "Verified Doctors",
      paragraph: "All doctors are licensed and verified",
    },
    {
      id: 2,
      icon: <IoMdTime />,
      title: "Quick Booking",
      paragraph: "Book appointments in under 60 seconds",
    },
    {
      id: 3,
      icon: <GoPeople />,
      title: "Patient Support",
      paragraph: "24/7 support for all your needs",
    },
    {
      id: 4,
      icon: <LiaCertificateSolid />,
      title: "Quality Care",
      paragraph: "Top-rated healthcare professionals",
    },
  ];

  return (
    <section className="sectionPadding container">
      <SectionTitle title="Why Choose Us" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 flex flex-col items-center gap-4 text-center"
          >
            <div className="flex items-center justify-center p-4 rounded-full bg-myGreen-200 shadow-md">
              <span className="text-3xl text-white">{item.icon}</span>
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
