import api from "./api";

export const getAboutUsBoxes = async () => {
  const { data } = await api.get("/abous-us-boxes");

  return data?.data || {};
};

export const getFeatures = async () => {
  const { data } = await api.get("/features");

  return data?.data || {};
};

export const getTestimonials = async () => {
  const { data } = await api.get("/testimonials");

  return data?.data || {};
};

export const getWebBanners = async () => {
  const { data } = await api.get("/web-banners");

  return data?.data || {};
};

export const getHowWeWork = async () => {
  const { data } = await api.get("/work-processes");

  return data?.data || {};
};

export const getBlogs = async () => {
  const { data } = await api.get("/blogs");

  return data?.data || {};
};

export const getServiceHighlights = async () => {
  const { data } = await api.get("/service-highlights");

  return data?.data || {};
};

export const postContactUs = async (payload) => {
  const { data } = await api.post("/contact", payload);

  return data?.data || {};
};

export const postJoinRequest = async (payload) => {
  const { data } = await api.post("/join-request", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data?.data || {};
};
