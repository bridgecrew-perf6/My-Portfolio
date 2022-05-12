import React from "react";
import "./projects.css";
import { useTranslation } from "react-i18next";

// import db from "../../services/firebase";
// import { collection, getDocs } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function ProjectsCard() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <section className="projectsSection" data-aos="fade-up" id="proyectos">
        <h1 className="projectsTitle">{t("projects.title")}</h1>
        <div className="projectsFlex">
          <div className="card mb-3" data-aos="fade-down" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://francalderon67.github.io/Simple-Star-Wars-Page/imagenes/logo.png" className="img-fluid rounded-start" alt="LOGO" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{t("starWarsPage.title")}</h5>
                  <p className="card-text">{t("starWarsPage.description")}</p>
                  <a className="linkBtn" href="https://github.com/FranCalderon67/Simple-Star-Wars-Page" target="_blank" rel="noreferrer">
                    {t("starWarsPage.repoBtn")}
                  </a>
                  <a className="linkBtn" href="https://francalderon67.github.io/Simple-Star-Wars-Page/" target="_blank" rel="noreferrer">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" data-aos="fade-down" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://francalderon67.github.io/Home-Banking-Demo/imagenes/logo.png" className="img-fluid rounded-start" alt="LOGO" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{t("homeBanking.title")}</h5>
                  <p className="card-text">{t("homeBanking.description")}</p>
                  <a className="linkBtn" href="https://github.com/FranCalderon67/Home-Banking-Demo" target="_blank" rel="noreferrer">
                    {t("homeBanking.repoBtn")}
                  </a>
                  <a className="linkBtn" href="https://francalderon67.github.io/Home-Banking-Demo/" target="_blank" rel="noreferrer">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" data-aos="fade-down" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://classy-genie-c119ba.netlify.app/static/media/logo.5479f6f41574cceed97e.png" className="img-fluid rounded-start" alt="LOGO" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{t("starWarsStore.title")}</h5>
                  <p className="card-text">{t("starWarsStore.description")}</p>
                  <a className="linkBtn" href="https://github.com/FranCalderon67/Star-Wars-Store" target="_blank" rel="noreferrer">
                    {t("starWarsStore.repoBtn")}
                  </a>
                  <a className="linkBtn" href="https://classy-genie-c119ba.netlify.app/" target="_blank" rel="noreferrer">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" data-aos="fade-down" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://francalderon67.github.io/Dibujitos-Random/Imagenes/favicon.png" className="img-fluid rounded-start" alt="LOGO" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{t("dibujitosRandom.title")}</h5>
                  <p className="card-text">{t("dibujitosRandom.description")}</p>
                  <a className="linkBtn" href="https://github.com/FranCalderon67/Dibujitos-Random" target="_blank" rel="noreferrer">
                    {t("dibujitosRandom.repoBtn")}
                  </a>
                  <a className="linkBtn" href="https://francalderon67.github.io/Dibujitos-Random/" target="_blank" rel="noreferrer">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" data-aos="fade-down" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://3.bp.blogspot.com/-IthmPcbby_8/Woq6X7dNTwI/AAAAAAAAPIk/0q3_AOC0OuA36lLEp2so53iNKJyNY164ACLcBGAs/s640/nWc_qRgg_400x400.jpgx"
                  className="img-fluid rounded-start"
                  alt="LOGO"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{t("got.title")}</h5>
                  <p className="card-text">{t("got.description")}</p>
                  <a className="linkBtn" href="https://github.com/FranCalderon67/GOT-Characters" target="_blank" rel="noreferrer">
                    {t("got.repoBtn")}
                  </a>
                  <a className="linkBtn" href="https://unrivaled-zuccutto-d9a774.netlify.app/" target="_blank" rel="noreferrer">
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsCard;

// function ProjectsCard({ props }) {
//   return (
//     <>
//       <div key={props.id} className="card mb-3" data-aos="fade-down" style={{ maxWidth: "540px" }}>
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img src={props.image} className="img-fluid rounded-start" alt="LOGO" />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title">{props.name}</h5>
//               <p className="card-text">{props.description}</p>
//               <a className="linkBtn" href={props.repositorio} target="_blank" rel="noreferrer">
//                 Repositorio
//               </a>
//               <a className="linkBtn" href={props.link} target="_blank" rel="noreferrer">
//                 Link
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function ProjectsMap({ props }) {
//   return (
//     <div key={props.id} className="projectsFlex">
//       {props &&
//         props.map((c) => {
//           return <ProjectsCard props={c} />;
//         })}
//     </div>
//   );
// }

// function Projects() {
//   const [projects, setProjects] = useState();
//   const [loading, setLoading] = useState(true);

//   const getProjects = async () => {
//     try {
//       const projectsCollection = collection(db, "projects");
//       const call = await getDocs(projectsCollection);
//       const result = call.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
//       setProjects(result);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getProjects();
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <div className="text-center" style={{ backgroundColor: "rgb(48, 48, 48)" }}>
//           <div className="spinner-border text-warning" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       ) : (
//         <section className="projectsSection" data-aos="fade-up" id="proyectos">
//           <h1 className="projectsTitle">Proyectos</h1>;{<ProjectsMap props={projects} />}
//         </section>
//       )}
//     </>
//   );
// }
