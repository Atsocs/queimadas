import estadosCidades from "./estados-cidades.json";

export default function getCidades(siglaEstado) {
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
