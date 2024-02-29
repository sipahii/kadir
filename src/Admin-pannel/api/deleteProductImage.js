import axios from "axios";

const deleteProductImage = async (data, token) => {
  try {
    const response = await axios.delete(
      "https://onlineparttimejobs.in/api/cloudinaryimage/product",

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Custom-Header": "custom-value",
        },
        params: { ...data },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export default deleteProductImage;
