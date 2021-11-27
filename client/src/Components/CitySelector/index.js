import React, { useState } from "react";
import BrazilMap from "../BrazilMap";
import Select from "react-select";
import getCidades from "../../utils/getCidades";

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
