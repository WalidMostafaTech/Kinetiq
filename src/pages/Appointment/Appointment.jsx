import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { postJoinRequest } from "../../apiServices/home";
import { useTranslation } from "react-i18next";

const Appointment = () => {
  const { t } = useTranslation();

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
      setSuccessMsg(t("appointment.success"));
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
      setErrorMsg(t("appointment.error"));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ ...form, type: "patient" });
  };

  return (
    <section className="w-full max-w-4xl mx-auto pagePadding p-4">
      <SectionTitle title={t("appointment.title")} />

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="bg-myGreen-100 rounded-xl shadow-lg p-6 lg:p-8 space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex flex-col text-start">
            <label htmlFor="name" className="mb-1 font-medium">
              {t("appointment.name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={t("appointment.namePlaceholder")}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
              required
            />
          </div>

          {/* mobile */}
          <div className="flex flex-col text-start">
            <label htmlFor="mobile" className="mb-1 font-medium">
              {t("appointment.mobile")}
            </label>
            <input
              id="mobile"
              name="mobile"
              type="number"
              value={form.mobile}
              onChange={handleChange}
              placeholder={t("appointment.mobilePlaceholder")}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col text-start">
            <label htmlFor="email" className="mb-1 font-medium">
              {t("appointment.email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("appointment.emailPlaceholder")}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
            />
          </div>

          {/* region */}
          <div className="flex flex-col text-start">
            <label htmlFor="region" className="mb-1 font-medium">
              {t("appointment.region")}
            </label>
            <input
              id="region"
              name="region"
              type="text"
              value={form.region}
              onChange={handleChange}
              placeholder={t("appointment.regionPlaceholder")}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="mainBtn" disabled={isPending}>
            {isPending ? t("appointment.submitting") : t("appointment.submit")}
          </button>
        </div>

        {successMsg && (
          <div className="rounded-md bg-green-100 text-green-800 px-4 py-3 text-center border">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="rounded-md bg-red-100 text-red-800 px-4 py-3 text-center border">
            {errorMsg}
          </div>
        )}
      </motion.form>
    </section>
  );
};

export default Appointment;
