import "./skills.scss";
import { skillDesc, skillLinks } from "../content";
import { useState, useEffect } from "react";
import { devicons } from "../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";

export default function Skills() {
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
      <div className="anchor" id="skills-anchor">
        skills-anchor
      </div>
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
                if (!currentSkill || currentSkill !== object.skill) {
                  setSkillDetails(object.skill.toLowerCase());
                }
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
          <p>{skillDetails}</p>

          <a href={skillLink} className="skill-link" target="_blank">
            {skillLink ? (
              <FontAwesomeIcon
                className="finger"
                icon={faHandPointRight}
              ></FontAwesomeIcon>
            ) : (
              ""
            )}
            <span>&nbsp;</span>
            {skillLinkText}
          </a>
        </div>
      </div>
    </div>
  );
}
