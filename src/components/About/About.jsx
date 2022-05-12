import React from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
AOS.init();

function About() {
  const [t, i18n] = useTranslation("global");
  console.log(typeof i18n);
  return (
    <>
      <div className="aboutBackground" data-aos="fade-up" id="sobremi">
        <h1 className="aboutTitle">{t("about.title")}</h1>

        <p className="aboutText">{t("about.text")}</p>
      </div>
    </>
  );
}

export default About;
