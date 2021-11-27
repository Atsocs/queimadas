import axios from "axios";
import { baseURL } from "./../../constants";

export const getBrazilData = (setNumFocosBrasil) => {
  axios
    .get(`${baseURL}/api/total`)
    .then((res) => {
      setNumFocosBrasil(res.data.num_focos);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getStateData = (nomeEstado, setNumFocosEstado) => {
  axios
    .post(`${baseURL}/api/city`, {
      city: "",
      state: nomeEstado,
    })
    .then((res) => {
      setNumFocosEstado(res.data.num_focos);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCityData = (nomeCidade, nomeEstado, setNumFocosCidade) => {
  axios
    .post(`${baseURL}/api/city`, {
      city: nomeCidade,
      state: nomeEstado,
    })
    .then((res) => {
      setNumFocosCidade(res.data.num_focos);
    })
    .catch((err) => {
      console.log(err);
    });
};
