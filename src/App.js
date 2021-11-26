import BrazilMap from "./BrazilMap";

import React from "react";
import Select from "react-select";

const estados = [
  { value: "SP", label: "São Paulo" },
  { value: "MG", label: "Minas Gerais" },
  { value: "RJ", label: "Rio de Janeiro" },
];

export default function App() {
  return (
    <div>
      <Select options={estados} placeholder="Estado" />
      <BrazilMap></BrazilMap>
    </div>
  );
}
