import axios from "axios";
import { baseURL } from "../../constants";
import toTitleCase from "../../utils/TitleCase";

export const getHereData = (setters) => {
  axios
    .get(`${baseURL}/api/here`)
    .then((res) => {
      if (res.status !== 200) {
        console.log(res);
        return;
      }
      const data = res.data;
      data.cityName = toTitleCase(data.cityName);
      data.stateName = toTitleCase(data.stateName);
      setters.setSiglaEstado(data.stateCode);
      setters.setNomeEstado(data.stateName);
      setters.setCidadeSelecionada(data.cityName);
      setters.setNumFocosCidade(data.cityFires);
      setters.setNumFocosEstado(data.stateFires);
      setters.setNumFocosBrasil(data.countryFires);
    })
    .catch((err) => console.log(err));
};

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
