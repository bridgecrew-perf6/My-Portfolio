import React from "react";
import "./navBar.css";
function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBarFlex">
        <li className="navBarItem">
          <a className="navBarLink" href="#sobremi">
            SOBRE MI
          </a>
        </li>
        <li className="navBarItem">
          <a className="navBarLink" href="#habilidades">
            HABILIDADES
          </a>
        </li>
        <li className="navBarItem">
          <a className="navBarLink" href="#proyectos">
            PROYECTOS
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
