import "./skills.scss";
import { useState, useEffect } from "react";

export default function Skills() {
  const devicons = [
    { icon: "devicon-bootstrap-plain", skill: "Bootstrap" },
    { icon: "devicon-css3-plain", skill: "CSS" },
    { icon: "devicon-express-original", skill: "Express" },
    { icon: "devicon-firebase-plain", skill: "Firebase" },
    { icon: "devicon-git-plain", skill: "Git" },
    { icon: "devicon-github-original", skill: "GitHub" },
    { icon: "devicon-html5-plain", skill: "HTML" },
    { icon: "devicon-javascript-plain", skill: "JavaScript" },
    { icon: "devicon-mongodb-plain", skill: "MongoDB" },
    { icon: "devicon-nodejs-plain", skill: "Node.js" },
    { icon: "devicon-python-plain", skill: "Python" },
    { icon: "devicon-react-original", skill: "React" },
    { icon: "devicon-redux-original", skill: "Redux" },
    { icon: "devicon-sass-original", skill: "Sass" },
  ];

  const skillDesc = {
    bootstrap:
      "I've used Bootstrap v4 and v5 to create attractive and responsive sites.",
    css: "My projects have been enhanced with CSS media queries, flexbox/grid, and animations.",
    express:
      "I used Express as a REST API server for my Ballpark Rater CRUD app: Check it out.",
    firebase:
      "I taught myself how to utilize Google Firebase when setting up an orders database for my React Pizza Store app: Check it out.",
    git: "I utilize Git for version control, documentation, and establishing remotes on all of my apps.",
    github:
      "I've been contributing my code to GitHub almost daily since learning the basics in Oct. 2021. Visit my GitHub.",
    html: "I am currently working to improve my use of proper semantics and learn more attributes.",
    javascript:
      "I have completed two JavaScript courses totaling over 40 hours, and have registerd for an advanced topics course as well. JavaScript is used in all of my projects.",
    mongodb:
      "Mongo is the DB for my Ballpark Rater CRUD app which uses three schemas: Check it out.",
    nodejs:
      "I use node to run JavaScript code and npm to add necessary libraries and frameworks to my projects.",
    python:
      "I use Python at work for data analysis/visualization projects. Not used explicitly for web development, but I feel it enhances my overall coding skill.",
    react:
      "Three projects listed below (plus the site you're on right now!) were built to be interactive and seamless using React state management and Hooks.",
    redux:
      "My Garden Plotter app (check it out) has a larger component and state system which allowed me to learn and deploy Redux.",
    sass: "I enjoy taking advantage of Sass nesting and global variables to make styling easier.",
  };

  const [currentSkill, setCurrentSkill] = useState(null);
  const [skillDetails, setSkillDetails] = useState(null);

  useEffect(() => {
    switch (skillDetails) {
      case "bootstrap":
        setSkillDetails(skillDesc.bootstrap);
        break;
      case "css":
        setSkillDetails(skillDesc.css);
        break;
      case "express":
        setSkillDetails(skillDesc.express);
        break;
      case "firebase":
        setSkillDetails(skillDesc.firebase);
        break;
      case "git":
        setSkillDetails(skillDesc.git);
        break;
      case "github":
        setSkillDetails(skillDesc.github);
        break;
      case "html":
        setSkillDetails(skillDesc.html);
        break;
      case "javascript":
        setSkillDetails(skillDesc.javascript);
        break;
      case "mongodb":
        setSkillDetails(skillDesc.mongodb);
        break;
      case "node.js":
        setSkillDetails(skillDesc.nodejs);
        break;
      case "python":
        setSkillDetails(skillDesc.python);
        break;
      case "react":
        setSkillDetails(skillDesc.react);
        break;
      case "redux":
        setSkillDetails(skillDesc.redux);
        break;
      case "sass":
        setSkillDetails(skillDesc.sass);
        break;
      default:
        setSkillDetails("Click a skill for more!");
    }
  }, [currentSkill]);

  return (
    <div className="skills" id="skills">
      <div className="icons">
        {devicons.map((object) => {
          return (
            <div
              className={
                object.skill === currentSkill
                  ? "icon-block active"
                  : "icon-block"
              }
              onClick={() => {
                setCurrentSkill(object.skill);
                setSkillDetails(object.skill.toLowerCase());
              }}
            >
              <i
                className={
                  object.skill === currentSkill
                    ? `${object.icon} active`
                    : `${object.icon}`
                }
              ></i>
              <p className={object.skill === currentSkill ? "active" : ""}>
                {object.skill}
              </p>
            </div>
          );
        })}
      </div>

      <div className="details">
        <div className="terminal">
          <p>
            {skillDetails}
            <div
              className={
                skillDetails === "Click a skill for more!"
                  ? "cursor active"
                  : "cursor"
              }
            >
              |
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
