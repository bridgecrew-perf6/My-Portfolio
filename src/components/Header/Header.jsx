import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="headerFlex">
        <div>
          <p className="headerName">
            Francisco <br />
            Calderón
          </p>

          <p className="headerText">
            Soy un desarrollador web
            <br /> orientado a los detalles, <br /> diseños simples y adaptables
          </p>
          <button className="descargarBtn">Descargar CV</button>
        </div>

        <div>
          <img className="headerImg" src={require("../imagenes/profileNoBackground.png")} alt="ERROR" />
        </div>
      </div>
    </>
  );
}

export default Header;
