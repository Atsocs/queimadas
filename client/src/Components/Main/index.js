import React, { useState, useEffect } from "react";
import BrazilMap from "../BrazilMap";
import FireBoard from "../FireBoard";
import Loading from "./../Loading";
import stateNames from "../../utils/stateNames.json";
import CitySelector from "../CitySelector";
import Top10 from "../Top10";

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
  }, [nomeCidade, nomeEstado]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div style={styles.top_row}>
        <Top10 />
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
      <div style={styles.bottom_row}>
        <FireBoard
          country={{ name: "Brasil", count: numFocosBrasil }}
          state={siglaEstado && { name: nomeEstado, count: numFocosEstado }}
          city={nomeCidade && { name: nomeCidade, count: numFocosCidade }}
        />
      </div>
    </div>
  );
}

const styles = {
  top_row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 80,
  },
  bottom_row: {
    position: "relative",
    left: "-8%",
    textAlign: "center",
  },
};
