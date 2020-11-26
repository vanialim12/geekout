import axios from "axios";

export const getDonations = async () => {
  const { data } = await axios.get("/api/donations");
  return data;
};
