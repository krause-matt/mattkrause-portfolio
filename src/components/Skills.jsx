import "./skills.scss";

export default function Skills() {
  const devicons = [
    "devicon-bootstrap-plain",
    "devicon-css3-plain",
    "devicon-express-original",
    "devicon-firebase-plain",
    "devicon-git-plain",
    "devicon-github-original",
    "devicon-html5-plain",
    "devicon-javascript-plain",
    "devicon-mongodb-plain",
    "devicon-nodejs-plain",
    "devicon-python-plain",
    "devicon-react-original",
    "devicon-redux-original",
    "devicon-sass-original",
    "devicon-vscode-plain",
  ];

  return (
    <div className="skills" id="skills">
      {devicons.map((icon) => {
        return (
          <div className="icon-block">
            <i className={icon}></i>
          </div>
        );
      })}
    </div>
  );
}
