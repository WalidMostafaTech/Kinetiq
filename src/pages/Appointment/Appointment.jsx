import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { postJoinRequest } from "../../apiServices/home";

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    region: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: postJoinRequest,
    onSuccess: () => {
      setSuccessMsg("Your appointment has been booked successfully!");
      setErrorMsg("");
      setForm({
        name: "",
        mobile: "",
        email: "",
        region: "",
      });
    },
    onError: () => {
      setSuccessMsg("");
      setErrorMsg("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ ...form, type: "patient" });
  };

  return (
    <section className="w-full max-w-4xl mx-auto pagePadding p-4">
      <SectionTitle title="Book An Appointment" />

      <form
        onSubmit={handleSubmit}
        className="bg-myGreen-100 rounded-xl shadow-lg p-6 lg:p-8 space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex flex-col text-start">
            <label htmlFor="name" className="mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
              required
            />
          </div>

          {/* mobile */}
          <div className="flex flex-col text-start">
            <label htmlFor="mobile" className="mb-1 font-medium">
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="number"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col text-start">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
            />
          </div>

          {/* region */}
          <div className="flex flex-col text-start">
            <label htmlFor="region" className="mb-1 font-medium">
              Region
            </label>
            <input
              id="region"
              name="region"
              type="text"
              value={form.region}
              onChange={handleChange}
              placeholder="Enter your region"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <motion.button
            type="submit"
            className="mainBtn"
            disabled={isPending}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {isPending ? "Booking..." : "Book Appointment"}
          </motion.button>
        </div>

        {successMsg && (
          <div className="rounded-md bg-green-100 text-green-800 px-4 py-3 text-start">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="rounded-md bg-red-100 text-red-800 px-4 py-3 text-start">
            {errorMsg}
          </div>
        )}
      </form>
    </section>
  );
};

export default Appointment;
