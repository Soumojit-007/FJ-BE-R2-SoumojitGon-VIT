import axios from "axios";

export const fetchExchangeRate = async (from, to) => {
  const response = await axios.get(
    `https://api.exchangerate-api.com/v4/latest/${from}`
  );

  return response.data.rates[to];
};