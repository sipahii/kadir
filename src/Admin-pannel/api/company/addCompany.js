import axios from "axios";

const addCompany = async (data, compapanyId, token) => {
  try {
    const response = await axios.post(
      `https://onlineparttimejobs.in/api/bulkImportHeader/add_headerBulkAdd`,
      {
        list: data,
        compapanyId: compapanyId,
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

export default addCompany;
