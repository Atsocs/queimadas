import Select from "react-select";
import getCidades from "../utils/getCidades";

export default function CitySelector({
  nomeCidade,
  siglaEstado,
  setNomeCidade,
}) {
  return (
    <Select
      name="cidade"
      styles={styles.select}
      options={getCidades(siglaEstado)}
      value={
        nomeCidade && {
          value: nomeCidade,
          label: nomeCidade,
        }
      }
      onChange={({ value, _ }) => {
        setNomeCidade(value);
      }}
      isDisabled={siglaEstado === ""}
      placeholder={
        "Selecione " + (siglaEstado === "" ? "o estado primeiro" : "a cidade")
      }
    />
  );
}

const styles = {
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
