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

  const bootstrap = "version 4 and 5!";

  const [currentSkill, setCurrentSkill] = useState(null);
  const [skillDetails, setSkillDetails] = useState(null);

  useEffect(() => {
    switch (skillDetails) {
      case "bootstrap":
        setSkillDetails(bootstrap);
        break;
      default:
        setSkillDetails("Click a skill to see more!");
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
                skillDetails === "Click a skill to see more!"
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
