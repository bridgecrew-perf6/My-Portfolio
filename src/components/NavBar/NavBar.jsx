import React from "react";
import "./navBar.css";
function NavBar() {
  return (
    <ul className="navBar">
      <div className="navBarFlex">
        <li className="navBarItem">
          <a className="navBarLink" href="#sobremi">
            SOBRE MI
          </a>
        </li>
        <li className="navBarItem">
          <a className="navBarLink" href="#proyectos">
            PROYECTOS
          </a>
        </li>
        <li className="navBarItem">
          <a className="navBarLink" href="#habilidades">
            HABILIDADES
          </a>
        </li>
      </div>
    </ul>
  );
}

export default NavBar;
