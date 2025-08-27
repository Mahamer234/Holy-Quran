import axios from "axios";
import api from "@api/axios";

const fetchData = async <T>(url: string) => {
  try {
    const res = await api.get<T>(url);

    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    } else {
      throw new Error("Unexpected error occurred");
    }
  }
};
export default fetchData;
