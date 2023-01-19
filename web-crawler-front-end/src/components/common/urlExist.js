import axios from "axios";

// function to check if url exist or not using axios
const urlExist = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) return true;
  } catch (err) {
    console.error("error", err);
  }
};
export default urlExist;
