import React, { useState } from "react";
import BrazilMap from "./BrazilMap";
import Select from "react-select";
import estadosCidades from "./data/estados-cidades.json";

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

  const cidades = getCidades(siglaEstado);
  return (
    <div>
      <BrazilMap
        onClick={(sigla) => {
          setSiglaEstado(sigla);
          setCidadeSelecionada("");
        }}
      />
      <Select
        name="cidade"
        options={cidades}
        value={cidadeSelecionada}
        onChange={(cidade) => setCidadeSelecionada(cidade)}
        placeholder="Cidade"
      />
    </div>
  );
}
