import React, { useState, useEffect } from "react";
import BrazilMap from "../BrazilMap";
import Select from "react-select";
import getCidades from "../../utils/getCidades";
import FireBoard from "../FireBoard";
import {
  getBrazilData,
  getStateData,
  getCityData,
  getHereData,
} from "./getData";
import stateNames from "../../utils/stateNames.json";

export default function Main() {
  const [siglaEstado, setSiglaEstado] = useState("");
  const [nomeEstado, setNomeEstado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [numFocosBrasil, setNumFocosBrasil] = useState(0);
  const [numFocosEstado, setNumFocosEstado] = useState(0);
  const [numFocosCidade, setNumFocosCidade] = useState(0);

  useEffect(() => {
    getHereData({
      setSiglaEstado,
      setNomeEstado,
      setCidadeSelecionada,
      setNumFocosBrasil,
      setNumFocosEstado,
      setNumFocosCidade,
    });
  }, []);

  useEffect(() => {
    getBrazilData(setNumFocosBrasil);
  }, []);

  useEffect(() => {
    getStateData(nomeEstado, setNumFocosEstado);
  }, [nomeEstado]);

  useEffect(() => {
    getCityData(cidadeSelecionada, nomeEstado, setNumFocosCidade);
  }, [cidadeSelecionada, nomeEstado]);

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    select: {
      menu: (provided, _) => ({
        ...provided,
        width: 400,
      }),
      control: (provided, _) => ({
        ...provided,
        width: 400,
      }),
    },
  };

  const cidades = getCidades(siglaEstado);
  const placeholder =
    "Selecione " + (siglaEstado === "" ? "o estado primeiro" : "a cidade");

  let stateData = null;
  if (siglaEstado !== "") {
    stateData = { name: nomeEstado, count: numFocosEstado };
  }

  let cityData = null;
  if (cidadeSelecionada !== "") {
    cityData = { name: cidadeSelecionada, count: numFocosCidade };
  }

  return (
    <div>
      <div style={styles.container}>
        <BrazilMap
          select={siglaEstado}
          onClick={(sigla) => {
            setSiglaEstado(sigla);
            setNomeEstado(stateNames[sigla]);
            setCidadeSelecionada("");
          }}
        />
        <Select
          name="cidade"
          styles={styles.select}
          options={cidades}
          value={
            cidadeSelecionada && {
              value: cidadeSelecionada,
              label: cidadeSelecionada,
            }
          }
          onChange={({ value, _ }) => {
            setCidadeSelecionada(value);
          }}
          isDisabled={siglaEstado === ""}
          placeholder={placeholder}
        />
      </div>
      <FireBoard
        country={{ name: "Brasil", count: numFocosBrasil }}
        state={stateData}
        city={cityData}
      ></FireBoard>
    </div>
  );
}
