import React from "react";
import estadosSvg from "./estados-svg.json";
import Estado from "./../Estado";

export default function BrazilMap({ onClick, select }) {
  return (
    <div>
      <svg
        version="1.1"
        id="svg-map"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="450px"
        height="460px"
        viewBox="0 0 450 460"
        enableBackground="new 0 0 450 460"
        space="preserve"
      >
        <g>
          {estadosSvg.map((estado) => {
            return (
              <Estado
                key={estado.sigla}
                nome={estado.nome}
                sigla={estado.sigla}
                path={estado.path}
                matrix={estado.matrix}
                circlePath={estado.circlePath}
                onClick={(event) => {
                  event.preventDefault();
                  onClick(estado.sigla);
                }}
                selected={estado.sigla === select}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
