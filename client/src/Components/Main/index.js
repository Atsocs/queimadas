import React, { useState, useEffect } from "react";
import BrazilMap from "../BrazilMap";
import FireBoard from "../FireBoard";
import Loading from "./../Loading";
import stateNames from "../../utils/stateNames.json";
import CitySelector from "../CitySelector";

import {
  getBrazilData,
  getStateData,
  getCityData,
  getHereData,
} from "./getData";

export default function Main() {
  const [loading, setLoading] = useState(true);

  const [siglaEstado, setSiglaEstado] = useState("");
  const [nomeEstado, setNomeEstado] = useState("");
  const [nomeCidade, setNomeCidade] = useState("");
  const [numFocosBrasil, setNumFocosBrasil] = useState(0);
  const [numFocosEstado, setNumFocosEstado] = useState(0);
  const [numFocosCidade, setNumFocosCidade] = useState(0);

  useEffect(() => {
    getHereData({
      setLoading,

      setSiglaEstado,
      setNomeEstado,
      setNomeCidade,
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
    getCityData(nomeCidade, nomeEstado, setNumFocosCidade);
  }, [nomeCidade]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div style={styles.container}>
        <BrazilMap
          select={siglaEstado}
          onClick={(sigla) => {
            setSiglaEstado(sigla);
            setNomeEstado(stateNames[sigla]);
            setNomeCidade("");
          }}
        />
        <CitySelector
          nomeCidade={nomeCidade}
          siglaEstado={siglaEstado}
          setNomeCidade={setNomeCidade}
        />
      </div>
      <FireBoard
        country={{ name: "Brasil", count: numFocosBrasil }}
        state={siglaEstado && { name: nomeEstado, count: numFocosEstado }}
        city={nomeCidade && { name: nomeCidade, count: numFocosCidade }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
