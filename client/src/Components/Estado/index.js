import "./index.css";

export default function Estado({
  nome,
  sigla,
  path,
  matrix,
  circlePath,
  onClick,
  selected,
}) {
  const selectedClass = selected ? " selected " : " ";
  return (
    <a href={"#" + sigla} onClick={onClick}>
      <title>{nome}</title>
      <path
        className={selectedClass}
        stroke="#FFFFFF"
        strokeWidth="1.0404"
        strokeLinecap="round"
        strokeLinejoin="round"
        d={path}
      ></path>
      {circlePath && (
        <path className={"circle" + selectedClass} d={circlePath}></path>
      )}
      <text transform={matrix} fill="#FFFFFF">
        {sigla}
      </text>
    </a>
  );
}
