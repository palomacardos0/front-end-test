import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get(
      "https://corebiz-test-server.onrender.com/api/v1/products"
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      status: 400,
      data: [],
    };
  }
}
