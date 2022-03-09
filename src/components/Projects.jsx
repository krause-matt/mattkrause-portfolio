import "./projects.scss";
import { useState, useEffect } from "react";
import { ballparkRater, gardenPlotter } from "../images";

export default function Projects() {
  const ballpark = {
    title: "Ballpark Rater",
    subtitle: "Baseball field locating and rating app",
    description: "express & mongo",
    image: ballparkRater[0],
  };
  const garden = {
    title: "Garden Plotter",
    subtitle: "Gardening social site",
    description: "react and redux",
    image: gardenPlotter[0],
  };

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
      default:
        setProjectDetails(ballpark);
    }
  }, [currentProject]);

  const projectInfo = [
    { id: "ballpark", title: "Ballpark Rater" },
    { id: "garden", title: "Garden Plotter" },
    { id: "pizza", title: "Pizza Place" },
    { id: "senate", title: "Senate Vote Compare" },
    { id: "fit", title: "FITtrain" },
  ];

  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="selector">
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
            <img src={projectDetails.image} />
            <div className="buttons">
              <button>App</button>
              <button>Code</button>
            </div>
          </div>
          <div className="description">
            <h1>{projectDetails.title}</h1>
            <h3>{projectDetails.subtitle}</h3>
            <p>{projectDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
