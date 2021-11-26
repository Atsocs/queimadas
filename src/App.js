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

export default function App() {
  const [siglaEstado, setSiglaEstado] = useState("");
  const cidades = getCidades(siglaEstado);
  return (
    <div>
      <BrazilMap
        onClick={(sigla) => {
          setSiglaEstado(sigla);
        }}
      />
      <Select options={cidades} placeholder="Cidade" />
      <p>{siglaEstado}</p>
    </div>
  );
}
