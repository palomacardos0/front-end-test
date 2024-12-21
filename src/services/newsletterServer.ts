import axios from "axios";

export async function postNewsletter(name: string, email: string) {
  try {
    const response = await axios.post(
      "https://corebiz-test-server.onrender.com/api/v1/newsletter",
      {
        name,
        email,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 400,
      data: {
        message: "error",
      },
    };
  }
}
