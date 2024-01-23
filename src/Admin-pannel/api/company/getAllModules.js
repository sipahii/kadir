import axios from "axios";
const getAllModules = async (token) => {
  try {
    const response = await axios.get(
      `https://onlineparttimejobs.in/api/bulkImportHeader/parent`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Custom-Header": "custom-value",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    throw error;
  }
};

export default getAllModules;
