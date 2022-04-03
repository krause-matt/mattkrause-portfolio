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
      "I used Express as a REST API server for my Ballpark Rater CRUD app. Check it out:",
    firebase:
      "I taught myself how to utilize Google Firebase when setting up an orders database for my React Pizza Store app. Check it out:",
    git: "I utilize Git for version control, documentation, and establishing remotes on all of my apps.",
    github:
      "I've been contributing my code to GitHub almost daily since learning the basics in Oct. 2021.",
    html: "I am currently working to improve my use of proper semantics and learn more attributes.",
    javascript:
      "I have completed two JavaScript courses totaling over 40 hours, and have registerd for an advanced topics course as well. JavaScript is used in all of my projects.",
    mongodb:
      "Mongo is the DB for my Ballpark Rater CRUD app which uses three schemas. Check it out:",
    nodejs:
      "I use node to run JavaScript code and npm to add necessary libraries and frameworks to my projects.",
    python:
      "I use Python at work for data analysis and visualization projects. Not used explicitly for web development, but I feel it enhances my overall coding skill.",
    react:
      "Three projects listed below (plus the site you're on right now!) were built to be interactive and seamless using React state management and Hooks.",
    redux:
      "My Garden Plotter app has a larger component and state system which allowed me to learn and deploy Redux. Check it out:",
    sass: "I enjoy taking advantage of Sass nesting and global variables to make styling easier.",
  };

  const skillLinks = {
    link: {
      express: "#skills",
      firebase: "#skills",
      github: "#skills",
      mongodb: "#skills",
      redux: "#skills",
    },
    text: {
      express: "Ballpark Rater App",
      firebase: "Pizza Place App",
      github: "Visit my GitHub",
      mongodb: "Ballpark Rater App",
      redux: "Garden Plotter App",
    },
  };

  const [currentSkill, setCurrentSkill] = useState(null);
  const [skillDetails, setSkillDetails] = useState(null);
  const [skillLink, setSkillLink] = useState(null);
  const [skillLinkText, setSkillLinkText] = useState(null);

  useEffect(() => {
    switch (skillDetails) {
      case "bootstrap":
        setSkillDetails(skillDesc.bootstrap);
        setSkillLink(null);
        setSkillLinkText(null);
        break;
      case "css":
        setSkillDetails(skillDesc.css);
        setSkillLink(null);
        setSkillLinkText(null);
        break;
      case "express":
        setSkillDetails(skillDesc.express);
        setSkillLink(skillLinks.link.express);
        setSkillLinkText(skillLinks.text.express);
        break;
      case "firebase":
        setSkillDetails(skillDesc.firebase);
        setSkillLink(skillLinks.link.firebase);
        setSkillLinkText(skillLinks.text.firebase);
        break;
      case "git":
        setSkillDetails(skillDesc.git);
        setSkillLink(null);
        setSkillLinkText(null);
        break;
      case "github":
        setSkillDetails(skillDesc.github);
        setSkillLink(skillLinks.link.github);
        setSkillLinkText(skillLinks.text.github);
        break;
      case "html":
        setSkillDetails(skillDesc.html);
        setSkillLink(null);
        setSkillLinkText(null);
        break;
      case "javascript":
        setSkillDetails(skillDesc.javascript);
        setSkillLink(null);
        setSkillLinkText(null);
        break;
      case "mongodb":
        setSkillDetails(skillDesc.mongodb);
        setSkillLink(skillLinks.link.mongodb);
        setSkillLinkText(skillLinks.text.mongodb);
        break;
      case "node.js":
        setSkillDetails(skillDesc.nodejs);
        setSkillLink(null);
        setSkillLinkText(null);
        break;
      case "python":
        setSkillDetails(skillDesc.python);
        setSkillLink(null);
        setSkillLinkText(null);
        break;
      case "react":
        setSkillDetails(skillDesc.react);
        setSkillLink(null);
        setSkillLinkText(null);
        break;
      case "redux":
        setSkillDetails(skillDesc.redux);
        setSkillLink(skillLinks.link.redux);
        setSkillLinkText(skillLinks.text.redux);
        break;
      case "sass":
        setSkillDetails(skillDesc.sass);
        setSkillLink(null);
        setSkillLinkText(null);
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
        <div className="skills">Skills.</div>
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
          <a href={skillLink} className="skill-link">
            {skillLinkText}
          </a>
        </div>
      </div>
    </div>
  );
}
