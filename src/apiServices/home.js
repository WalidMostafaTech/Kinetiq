import api from "./api";

export const getAboutUsBoxes = async () => {
  const { data } = await api.get("/abous-us-boxes");
  console.log(data);
  return data?.data || {};
};

export const getFeatures = async () => {
  const { data } = await api.get("/features");
  console.log(data);
  return data?.data || {};
};

export const getTestimonials = async () => {
  const { data } = await api.get("/testimonials");
  console.log(data);
  return data?.data || {};
};

export const getWebBanners = async () => {
  const { data } = await api.get("/web-banners");
  console.log(data);
  return data?.data || {};
};

export const getHowWeWork = async () => {
  const { data } = await api.get("/work-processes");
  console.log(data);
  return data?.data || {};
};

export const getBlogs = async () => {
  const { data } = await api.get("/blogs");
  console.log(data);
  return data?.data || {};
};

export const getServiceHighlights = async () => {
  const { data } = await api.get("/service-highlights");
  console.log(data);
  return data?.data || {};
};

export const postContactUs = async (payload) => {
  const { data } = await api.post("/contact", payload);
  console.log(data);
  return data?.data || {};
};

export const postJoinRequest = async (payload) => {
  const { data } = await api.post("/join-request", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(data);
  return data?.data || {};
};
