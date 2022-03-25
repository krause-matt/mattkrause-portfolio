import "./projects.scss";
import { useState, useEffect } from "react";
import {
  ballparkRater,
  gardenPlotter,
  pizzaPlace,
  senateAPI,
  fitTrain,
} from "../images";

export default function Projects() {
  const ballpark = {
    title: "Ballpark Rater",
    subtitle: "A professional baseball field locating and rating app",
    icons: [
      "devicon-bootstrap-plain",
      "devicon-express-original",
      "devicon-html5-plain",
      "devicon-javascript-plain",
      "devicon-mongodb-plain",
    ],
    image: ballparkRater[0],
  };
  const garden = {
    title: "Garden Plotter",
    subtitle: "Gardening social site",
    icons: [
      "devicon-html5-plain",
      "devicon-javascript-plain",
      "devicon-react-original",
      "devicon-redux-original",
    ],
    image: gardenPlotter[0],
  };
  const pizza = {
    title: "The Pizza Place",
    subtitle: "Online ordering for a fake pizza restaurant",
    icons: [
      "devicon-bootstrap-plain",
      "devicon-firebase-plain",
      "devicon-javascript-plain",
      "devicon-react-original",
    ],
    image: pizzaPlace[0],
  };
  const senate = {
    title: "Senate Vote Comparator",
    subtitle:
      "Tool for fetching data from the ProPublica Congresss API to compare vote history between two Senators",
    icons: [
      "devicon-bootstrap-plain",
      "devicon-javascript-plain",
      "devicon-react-original",
    ],
    image: senateAPI[0],
  };
  const fit = {
    title: "FITtrain",
    subtitle: "Gym website built to utilize CSS grid",
    icons: ["devicon-html5-plain", "devicon-sass-original"],
    image: fitTrain[0],
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

  const projectInfo = [
    { id: "ballpark", title: "Ballpark Rater" },
    { id: "garden", title: "Garden Plotter" },
    { id: "pizza", title: "Pizza Place" },
    { id: "senate", title: "Senate Vote Comparator" },
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
