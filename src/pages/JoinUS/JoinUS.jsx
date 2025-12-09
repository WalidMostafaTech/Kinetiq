import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { postJoinRequest } from "../../apiServices/home";
import { useTranslation } from "react-i18next";

const JoinUS = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    is_graduate: "",
    graduate_year: "",
    membership_card: null,
    graduation_certificate: null,
  });

  const [preview, setPreview] = useState({
    membership_card: null,
    graduation_certificate: null,
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setForm({ ...form, [name]: file });
      setPreview({ ...preview, [name]: URL.createObjectURL(file) });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const removeImage = (name) => {
    setForm({ ...form, [name]: null });
    setPreview({ ...preview, [name]: null });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const formData = new FormData();
      for (let key in payload) formData.append(key, payload[key]);
      return await postJoinRequest(formData);
    },
    onSuccess: () => {
      setSuccessMsg(t("join.success"));
      setErrorMsg("");

      setForm({
        name: "",
        mobile: "",
        is_graduate: "",
        graduate_year: "",
        membership_card: null,
        graduation_certificate: null,
      });

      setPreview({
        membership_card: null,
        graduation_certificate: null,
      });
    },
    onError: () => {
      setSuccessMsg("");
      setErrorMsg(t("join.error"));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({
      ...form,
      is_graduate: form.is_graduate === "yes" ? 1 : 0,
      type: "doctor",
    });
  };

  return (
    <section className="w-full max-w-4xl mx-auto pagePadding p-4">
      <SectionTitle title={t("join.title")} />

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="bg-myGreen-100 rounded-xl shadow-lg p-6 lg:p-8 space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col text-start">
            <label className="mb-1 font-medium">{t("join.fullName")}</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 py-2 bg-white"
              required
            />
          </div>

          <div className="flex flex-col text-start">
            <label className="mb-1 font-medium">{t("join.mobile")}</label>
            <input
              name="mobile"
              type="number"
              value={form.mobile}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 py-2 bg-white"
              required
            />
          </div>

          <div className="flex flex-col text-start">
            <label className="mb-1 font-medium">{t("join.isGraduate")}</label>

            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="is_graduate"
                  value="yes"
                  checked={form.is_graduate === "yes"}
                  onChange={handleChange}
                  required
                />
                {t("join.yes")}
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="is_graduate"
                  value="no"
                  checked={form.is_graduate === "no"}
                  onChange={handleChange}
                />
                {t("join.no")}
              </label>
            </div>
          </div>

          {form.is_graduate === "yes" && (
            <div className="flex flex-col text-start">
              <label className="mb-1 font-medium">
                {t("join.graduationYear")}
              </label>
              <input
                name="graduate_year"
                type="number"
                placeholder={t("join.graduationYearPlaceholder")}
                value={form.graduate_year}
                onChange={handleChange}
                className="rounded-md border border-gray-300 px-3 py-2 bg-white"
                required
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["membership_card", "graduation_certificate"].map((key) => (
            <div key={key} className="flex flex-col text-start">
              <label className="mb-1 font-medium">
                {t(
                  `join.${
                    key === "membership_card"
                      ? "membershipCard"
                      : "graduationCertificate"
                  }`
                )}
              </label>

              {preview[key] ? (
                <div className="relative">
                  <img
                    src={preview[key]}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(key)}
                    className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <label className="flex items-center justify-center h-40 border-2 border-dashed rounded-xl cursor-pointer bg-white">
                  {t("join.upload")}
                  <input
                    type="file"
                    name={key}
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                    required={
                      key === "graduation_certificate" &&
                      form.is_graduate === "yes"
                    }
                  />
                </label>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button type="submit" className="mainBtn" disabled={isPending}>
            {isPending ? t("join.submitting") : t("join.submit")}
          </button>
        </div>

        {successMsg && (
          <div className="bg-green-100 text-green-800 px-4 py-3 rounded-md">
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-100 text-red-800 px-4 py-3 rounded-md">
            {errorMsg}
          </div>
        )}
      </motion.form>
    </section>
  );
};

export default JoinUS;
