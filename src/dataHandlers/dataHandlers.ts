import axios from "axios";

export const getHotelList = async () => {
  const response = await axios
    .create({
      baseURL: "http://localhost:3334/api/hotel_list/",
    })
    .get("/");
  return response;
};

export const getCountryList = async () => {
  const response = await axios
    .create({
      baseURL: "http://localhost:3334/api/country_list/",
    })
    .get("/");
  return response;
};

export const getToken = async () => {
  const response = await axios
    .create({
      baseURL: "http://localhost:3334/api/user/",
    })
    .get("/check");
  return response;
};

export const sendUserData = async () => {
  await axios
    .create({
      baseURL: "http://localhost:3334/api/user",
    })
    .post("/login");
};
