import axios from "axios";

const getUMKMs = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/umkms");
    return response.data;
  } catch (error) {
    console.error("Error fetching UMKMs data:", error);
  }
};

export { getUMKMs };
