import data from "../data/data.json";
import axios from "axios";
export const getData = async () => {
  try {
    const res = await axios.post("https://reqres.in/api/workintech", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
