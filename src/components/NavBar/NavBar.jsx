import React from "react";
import "./navBar.css";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [t, i18n] = useTranslation("global");
  return (
    <nav className="navBar">
      <ul className="navBarFlex">
        <li className="navBarItem">
          <a className="navBarLink" href="#sobremi">
            {t("navBar.about")}
          </a>
        </li>
        <li className="navBarItem">
          <a className="navBarLink" href="#habilidades">
            {t("navBar.skills")}
          </a>
        </li>
        <li className="navBarItem">
          <a className="navBarLink" href="#proyectos">
            {t("navBar.projects")}
          </a>
        </li>
        <div className="navBarItem">
          <button onClick={() => i18n.changeLanguage("es")}>
            <img
              className="languageFlag"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png"
              alt="ES"
            />
          </button>
          <button onClick={() => i18n.changeLanguage("en")}>
            <img className="languageFlag" src="https://st.depositphotos.com/1141341/2558/i/600/depositphotos_25587499-stock-photo-flag-of-uk.jpg" alt="ES" />
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
