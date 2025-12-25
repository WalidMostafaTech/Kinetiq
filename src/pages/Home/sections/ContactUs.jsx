import { useState } from "react";
import SectionTitle from "../../../components/common/SectionTitle";
import { postContactUs } from "../../../apiServices/home";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactUs = () => {
  const { t } = useTranslation();

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
      setSuccessMsg(t("contact.messages.success"));
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setErrorMsg(t("contact.messages.error"));
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
        title={t("contact.title")}
        subTitle={t("contact.subtitle")}
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
                {t("contact.fields.name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.placeholders.name")}
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
                required
              />
            </div>

            <div className="flex flex-col text-start">
              <label htmlFor="phone" className="mb-1 font-medium">
                {t("contact.fields.phone")}
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                value={form.phone}
                onChange={handleChange}
                placeholder={t("contact.placeholders.phone")}
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
                required
              />
            </div>

            <div className="flex flex-col text-start md:col-span-2">
              <label htmlFor="email" className="mb-1 font-medium">
                {t("contact.fields.email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.placeholders.email")}
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
                required
              />
            </div>
          </div>

          <div className="flex flex-col text-start">
            <label htmlFor="message" className="mb-1 font-medium">
              {t("contact.fields.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.placeholders.message")}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white resize-y"
              required
            />
          </div>

          {successMsg && (
            <div className="mb-4 rounded-md bg-green-100 text-green-800 px-4 py-3 text-center border">
              {successMsg}
            </div>
          )}

          {errorMsg && (
            <div className="mb-4 rounded-md bg-red-100 text-red-800 px-4 py-3 text-center border">
              {errorMsg}
            </div>
          )}

          <div className="text-center">
            <button type="submit" className="mainBtn" disabled={submitting}>
              {submitting
                ? t("contact.buttons.sending")
                : t("contact.buttons.send")}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
