import { API_URL, STRAPI_API_TOKEN } from "./urls.js";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();

  return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  console.log(JSON.stringify(payload), "payload");
  const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
          Authorization: "Bearer " + STRAPI_API_TOKEN,
          "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    });
   
  const data = await res.json();
  return data;
};
