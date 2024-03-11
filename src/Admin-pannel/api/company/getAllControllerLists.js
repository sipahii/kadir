import axios from "axios";

const getAllControllerLists = async (ids, token) => {
  try {
    const response = await axios.post(
      `https://onlineparttimejobs.in/api/bulkImportHeader/controller`,
      {
        id: ids, // pass ids as an object with the key "id"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Custom-Header": "custom-value",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching controller lists:", error.message);
    throw error;
  }
};

export default getAllControllerLists;
