import React from "react";
import "./header.css";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="headerFlex">
        <div>
          <p className="headerName">{t("header.name")}</p>

          <p className="headerText">{t("header.text")}</p>

          <a href={t("header.CvLink")} target="_blank" rel="noreferrer">
            <button className="descargarBtn" type="button">
              {t("header.button")}
            </button>
          </a>
        </div>

        <div>
          <img className="headerImg" src={require("../imagenes/profileNoBackground.png")} alt="ERROR" />
        </div>
      </div>
    </>
  );
}

export default Header;
