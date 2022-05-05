import React, { useEffect, useState } from "react";
import "./projects.css";
import db from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function ProjectsCard({ props }) {
  return (
    <>
      <div key={props.id} className="card mb-3" data-aos="fade-down" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.image} className="img-fluid rounded-start" alt="LOGO" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
              <a className="linkBtn" href={props.repositorio} target="_blank" rel="noreferrer">
                Repositorio
              </a>
              <a className="linkBtn" href={props.link} target="_blank" rel="noreferrer">
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectsMap({ props }) {
  return (
    <div key={props.id} className="projectsFlex">
      {props &&
        props.map((c) => {
          return <ProjectsCard props={c} />;
        })}
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      const projectsCollection = collection(db, "projects");
      const call = await getDocs(projectsCollection);
      const result = call.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
      setProjects(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center" style={{ backgroundColor: "rgb(48, 48, 48)" }}>
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <section className="projectsSection" data-aos="fade-up" id="proyectos">
          <h1 className="projectsTitle">Proyectos</h1>;{<ProjectsMap props={projects} />}
        </section>
      )}
    </>
  );
}

export default Projects;
