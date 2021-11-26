import React, { useEffect } from "react";
import "./index.css";
import estadosSvg from "./estados-svg.json";
import Estado from "./../Estado";

export default function BrazilMap({ onClick }) {
  useEffect(() => {
    document.querySelector("body").addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        var anchor = e.target.closest("a");
        if (anchor !== null) {
          const sigla = anchor.textContent.slice(-2);
          onClick(sigla);
        }
      },
      false
    );
  }, []);

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
                nome={estado.nome}
                sigla={estado.sigla}
                path={estado.path}
                matrix={estado.matrix}
                circlePath={estado.circlePath}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
  // <!-- Creditos to olx.com.br -->
}
