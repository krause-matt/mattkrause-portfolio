import "./projects.scss";
import { useState, useEffect } from "react";
import { ballparkRater } from "../images";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState("ballpark");

  useEffect(() => {
    console.log("use effect");
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
            <img src={ballparkRater[0]} />
            <div className="buttons">
              <button>App</button>
              <button>Code</button>
            </div>
          </div>
          <div className="description"></div>
        </div>
      </div>
    </div>
  );
}
