import React from "react";
import "./skills.css";
import { DiBootstrap, DiCss3, DiGithubBadge, DiJsBadge, DiHtml5, DiJqueryLogo, DiReact, DiSass, DiGitBranch } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
AOS.init();

function Skills() {
  const [t, i18n] = useTranslation("global");
  console.log(typeof i18n);
  return (
    <>
      <div className="logoBackground" data-aos="fade-up" id="habilidades">
        <h1 className="skillsTitle">{t("skills.title")}</h1>
        <h3 className="skillsText">{t("skills.subTitle")}</h3>
        <div className="logoContainer">
          <div>
            <DiHtml5 className="devLogo" />
            <p className="nameLogo">HTML</p>
          </div>
          <div>
            <DiCss3 className="devLogo" />
            <p className="nameLogo">CSS</p>
          </div>
          <div>
            <DiJqueryLogo className="devLogo" />
            <p className="nameLogo">JQUERY</p>
          </div>
          <div>
            <DiSass className="devLogo" />
            <p className="nameLogo">SASS</p>
          </div>
          <div>
            <DiBootstrap className="devLogo" />
            <p className="nameLogo">BOOTSTRAP</p>
          </div>
          <div>
            <DiGitBranch className="devLogo" />
            <p className="nameLogo">GIT</p>
          </div>
          <div>
            <DiGithubBadge className="devLogo" />
            <p className="nameLogo">GITHUB</p>
          </div>
          <div>
            <DiJsBadge className="devLogo" />
            <p className="nameLogo">JAVASCRIPT</p>
          </div>
          <div>
            <DiReact className="devLogo" />
            <p className="nameLogo">REACT</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
