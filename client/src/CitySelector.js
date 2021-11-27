import React, { useState } from "react";
import BrazilMap from "./Components/BrazilMap";
import Select from "react-select";
import estadosCidades from "./estados-cidades.json";

function getCidades(siglaEstado) {
  const data = estadosCidades.estados.filter((obj) => {
    return obj.sigla === siglaEstado;
  });

  const formatarCidade = (nomeDaCidade) => {
    return { value: nomeDaCidade, label: nomeDaCidade };
  };

  const cidades =
    data.length !== 1 ? undefined : data[0].cidades.map(formatarCidade);

  return cidades;
}

export default function CitySelector() {
  const [siglaEstado, setSiglaEstado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

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
  return (
    <div style={styles.container}>
      <BrazilMap
        select={siglaEstado}
        onClick={(sigla) => {
          setSiglaEstado(sigla);
          setCidadeSelecionada("");
        }}
      />
      <Select
        name="cidade"
        styles={styles.select}
        options={cidades}
        value={cidadeSelecionada}
        onChange={(cidade) => setCidadeSelecionada(cidade)}
        isDisabled={siglaEstado === ""}
        placeholder={placeholder}
      />
    </div>
  );
}
