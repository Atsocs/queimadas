import "./index.css";

export default function Estado({ nome, sigla, path, matrix, circlePath }) {
  return (
    <a href={"#" + sigla}>
      <title>{nome}</title>
      <path
        stroke="#FFFFFF"
        strokeWidth="1.0404"
        strokeLinecap="round"
        strokeLinejoin="round"
        d={path}
      ></path>
      {circlePath && <path className="circle" d={circlePath}></path>}
      <text transform={matrix} fill="#FFFFFF">
        {sigla}
      </text>
    </a>
  );
}
