import { useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import { postContactUs } from "../../../apiServices/home";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setSubmitting(true);
    try {
      await postContactUs(form);
      setSuccessMsg("Your message has been sent successfully.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setErrorMsg("Failed to send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact-us"
      className="sectionPadding container scroll-smooth"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <SectionTitle
        title="Contact Us"
        subTitle="We’re here to help. Send us a message and we’ll get back to you."
      />

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-myGreen-100 rounded-xl shadow-lg p-6 lg:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div className="flex flex-col text-start">
              <label htmlFor="phone" className="mb-1 font-medium">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
                required
              />
            </div>

            <div className="flex flex-col text-start md:col-span-2">
              <label htmlFor="email" className="mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
                required
              />
            </div>
          </div>

          <div className="flex flex-col text-start">
            <label htmlFor="message" className="mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white resize-y"
              required
            />
          </div>

          {successMsg && (
            <div className="mb-4 rounded-md bg-green-100 text-green-800 px-4 py-3 text-start">
              {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="mb-4 rounded-md bg-red-100 text-red-800 px-4 py-3 text-start">
              {errorMsg}
            </div>
          )}

          <div className="text-center">
            <motion.button
              type="submit"
              className="mainBtn"
              disabled={submitting}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
