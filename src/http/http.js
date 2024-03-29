import axios from "axios";

export const getPage = async (url) => {
  const response = await axios.get(url);
  if (!response) throw new Error({ msg: "Erro ao obter a página" });
  return response.data;
};
