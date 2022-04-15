import "./projects.scss";
import { useState, useEffect } from "react";
import { ballpark, garden, pizza, senate, fit } from "../content";
import { projectInfo } from "../content";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState("ballpark");
  const [projectDetails, setProjectDetails] = useState(ballpark);

  useEffect(() => {
    switch (currentProject) {
      case "ballpark":
        setProjectDetails(ballpark);
        break;
      case "garden":
        setProjectDetails(garden);
        break;
      case "pizza":
        setProjectDetails(pizza);
        break;
      case "senate":
        setProjectDetails(senate);
        break;
      case "fit":
        setProjectDetails(fit);
        break;
      default:
        setProjectDetails(ballpark);
    }
  }, [currentProject]);

  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="selector">
          <div className="projects-med">Projects.</div>
          <ul>
            {projectInfo.map((object) => {
              return (
                <li
                  key={object.id}
                  className={object.id === currentProject ? "active" : ""}
                  onClick={() => setCurrentProject(object.id)}
                >
                  {object.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="display">
          <div className="images">
            <div className="projects">Projects.</div>
            <img src={projectDetails.image} />
            <div className="buttons">
              <button>Launch App</button>
              <button>View Code</button>
            </div>
          </div>
          <div className="description">
            <div className="title-container">
              <h1>{projectDetails.title}</h1>
              <h3>{projectDetails.subtitle}</h3>
            </div>
            <div className="detail-container">
              <p>{projectDetails.detail}</p>
            </div>

            <div className="skill-icon-container">
              {projectDetails.icons.map((skill) => {
                return <i className={skill} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
