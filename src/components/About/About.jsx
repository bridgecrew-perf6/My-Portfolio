import React from "react";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function About() {
  return (
    <>
      <div className="aboutBackground" data-aos="fade-up" id="sobremi">
        <h1 className="aboutTitle">SOBRE MÍ</h1>

        <p className="aboutText">
          Desarrollador front end, futuro fullstack. Me gusta el front end pero estoy ansioso de conocer el back end. He realizado mis estudios en Coder House y conclui los 6 meses que incumben el
          desarrollo front end, estudiando desarrollo web, JavaScript y React Js lo que me ha preparado para desempeñarme como desarrollador web. He ideado proyectos reales, simples y complejos y
          siempre estoy pensando en algo nuevo para desarrollar. Tengo buenas habilidades interpersonales ya que tengo experiencia trabajando en sectores de Recursos Humanos, lo que me ha permitido
          desarrollar "soft skils" como comunicación, trabajo en equipo, flexibilidad y aprender rapido.
        </p>
      </div>
    </>
  );
}

export default About;
