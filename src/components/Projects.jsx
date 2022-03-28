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
    detail:
      "As is the case with all of my projects, I chose Ballpark Rater to expose myself to new concepts in the form of an app themed around a personal interest. Being my first larger-scale app, learning several new concepts at once challenged me. I was introduced to RESTful routing, CRUD operations, middleware, and databases. The practice I got with asynchronous JavaScript was beneficial and a necessary tool I took on most of my following projects. Have fun checking out the site and leave a rating for any ballparks you've visited!",
    image: ballparkRater[0],
  };
  const garden = {
    title: "Garden Plotter",
    subtitle: "Social site for sharing your garden with friends",
    icons: [
      "devicon-html5-plain",
      "devicon-javascript-plain",
      "devicon-react-original",
      "devicon-redux-original",
    ],
    detail:
      "I've always thought an app to keep track of garden and planting details from year-to-year would be useful, so I decided to build one using React and Redux. Several customizable garden features and components were purposely included to learn Redux state management. My main focus for this project was the front-end, so I took care of the REST API with a limited npm package. Implementing CRUD operations using this strategy was tricky. If I were to build the app today, I'd establish a proper database and allow photo uploads. I learned authentication/authorization using Google OAuth for this app.",
    image: gardenPlotter[0],
  };
  const pizza = {
    title: "The Pizza Place",
    subtitle: "E-Commerce site for ordering pizza online",
    icons: [
      "devicon-bootstrap-plain",
      "devicon-firebase-plain",
      "devicon-javascript-plain",
      "devicon-react-original",
    ],
    detail:
      "I wanted to try creating an e-commerce site and get more experience with React code. The order customization portion of the app was a great learning process, as I had a combination of drop-downs, radio buttons, and checkboxes all contributing to state. I learned Google Firebase and Stripe to take care of the backend database and payment processes. I would like to try implementing Redux into this app or my next e-commerce project for more efficient state management between major components.",
    image: pizzaPlace[0],
  };
  const senate = {
    title: "Senate Vote Comparator",
    subtitle: "Compare Senate votes using the ProPublica Congresss API",
    icons: [
      "devicon-bootstrap-plain",
      "devicon-javascript-plain",
      "devicon-react-original",
    ],
    detail:
      "During a prior presidential primary race, I remember being curious about vote differences in congress between the candidates. This came to my mind when determining what to build for my first React app. Lucky, a public API existed with all of the data necessary to make a vote comparitor I was interested in. With almost 20 state items and multiple API requests, I had to work through problems with infinite React rendering. I used log statements to better understand the process order of my code and help correctly set my useEffect dependencies and useRef variables.",
    image: senateAPI[0],
  };
  const fit = {
    title: "FITtrain",
    subtitle: "Gym landing page designed using CSS grid",
    icons: ["devicon-html5-plain", "devicon-sass-original"],
    detail:
      "This project differs from the rest in that it is design-first rather than function-first. I had seen both CSS grid and Sass being used while watching developer tutorials on YouTube, and wanted to try them for myself. The speed at which you can design an app with Bootstrap is convenient, but I enjoyed getting to utilize my creative chops a bit more with custom styling. I have taken my lesson on Sass forward to other work, including the portfolio site you're on right now!",
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
