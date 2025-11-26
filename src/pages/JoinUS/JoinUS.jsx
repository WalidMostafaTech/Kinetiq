import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { postJoinRequest } from "../../apiServices/home";

const JoinUS = () => {
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

    // handle file inputs
    if (files) {
      const file = files[0];
      setForm({
        ...form,
        [name]: file,
      });

      // create preview
      setPreview({
        ...preview,
        [name]: URL.createObjectURL(file),
      });
      return;
    }

    // handle text inputs
    setForm({
      ...form,
      [name]: value,
    });
  };

  const removeImage = (name) => {
    setForm({
      ...form,
      [name]: null,
    });

    setPreview({
      ...preview,
      [name]: null,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const formData = new FormData();
      for (let key in payload) formData.append(key, payload[key]);
      return await postJoinRequest(formData);
    },
    onSuccess: () => {
      setSuccessMsg("Your request has been sent successfully!");
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
      setErrorMsg("Something went wrong. Please try again.");
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
      <SectionTitle title="Join Us" />

      <form
        onSubmit={handleSubmit}
        className="bg-myGreen-100 rounded-xl shadow-lg p-6 lg:p-8 space-y-5"
      >
        {/* FORM INPUTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="flex flex-col text-start">
            <label className="mb-1 font-medium">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
              required
            />
          </div>

          {/* mobile Number */}
          <div className="flex flex-col text-start">
            <label className="mb-1 font-medium">Mobile Number</label>
            <input
              name="mobile"
              type="number"
              value={form.mobile}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
              required
            />
          </div>

          {/* Graduate? */}
          <div className="flex flex-col text-start">
            <label className="mb-1 font-medium">Are you a graduate?</label>

            <div className="flex items-center gap-6 mt-2">
              {/* YES */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="is_graduate"
                  value="yes"
                  checked={form.is_graduate === "yes"}
                  onChange={handleChange}
                  className="text-myGreen-200 focus:ring-myGreen-200"
                  required
                />
                <span>Yes</span>
              </label>

              {/* NO */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="is_graduate"
                  value="no"
                  checked={form.is_graduate === "no"}
                  onChange={handleChange}
                  className="text-myGreen-200 focus:ring-myGreen-200"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Graduation Year */}
          {form.is_graduate === "yes" && (
            <div className="flex flex-col text-start">
              <label className="mb-1 font-medium">Graduation Year</label>
              <input
                name="graduate_year"
                type="number"
                min="1960"
                max="2030"
                placeholder="Enter graduation year"
                value={form.graduate_year}
                onChange={handleChange}
                className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-myGreen-200 bg-white"
                required
              />
            </div>
          )}
        </div>

        {/* FILE UPLOADS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Syndicate Card */}
          <div className="flex flex-col text-start">
            <label className="mb-1 font-medium">Membership Card</label>

            {preview.membership_card ? (
              <div className="relative w-full">
                <img
                  src={preview.membership_card}
                  className="w-full h-48 object-cover rounded-xl border shadow-md"
                />

                <button
                  type="button"
                  onClick={() => removeImage("membership_card")}
                  className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:bg-red-700 transition cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ) : (
              <label
                htmlFor="membership_card"
                className="flex flex-col items-center justify-center w-full h-40 rounded-xl border-2 border-dashed border-gray-300 cursor-pointer bg-white hover:border-myGreen-200 hover:bg-gray-50 transition"
              >
                <svg
                  className="w-10 h-10 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 014-4h1m4 0h1a4 4 0 014 4m-4-4V3m0 8l-3-3m3 3l3-3"
                  />
                </svg>
                <span className="text-gray-500 font-medium">
                  Click to upload
                </span>

                <input
                  id="membership_card"
                  name="membership_card"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
              </label>
            )}
          </div>

          {/* Graduation Certificate */}
          <div className="flex flex-col text-start">
            <label className="mb-1 font-medium">Graduation Certificate</label>

            {preview.graduation_certificate ? (
              <div className="relative w-full">
                <img
                  src={preview.graduation_certificate}
                  className="w-full h-48 object-cover rounded-xl border shadow-md"
                />

                <button
                  type="button"
                  onClick={() => removeImage("graduation_certificate")}
                  className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:bg-red-700 transition cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ) : (
              <label
                htmlFor="graduation_certificate"
                className="flex flex-col items-center justify-center w-full h-40 rounded-xl border-2 border-dashed border-gray-300 cursor-pointer bg-white hover:border-myGreen-200 hover:bg-gray-50 transition"
              >
                <svg
                  className="w-10 h-10 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 014-4h1m4 0h1a4 4 0 014 4m-4-4V3m0 8l-3-3m3 3l3-3"
                  />
                </svg>
                <span className="text-gray-500 font-medium">
                  Click to upload
                </span>

                <input
                  id="graduation_certificate"
                  name="graduation_certificate"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  required={form.is_graduate === "yes"}
                />
              </label>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <motion.button
            type="submit"
            className="mainBtn"
            disabled={isPending}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPending ? "Submitting..." : "Join Us"}
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

export default JoinUS;
