import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar image="https://us.123rf.com/450wm/mrshamsjaman/mrshamsjaman2007/mrshamsjaman200700318/152351400-lettre-initiale-logo-jk-ou-mod%C3%A8les-de-conception-de-vecteur-de-logo-kj.jpg?ver=6" />
      <div className="data">
        <Intro
          name="Jayanth Kumar S"
          about="Full-stact Web developer , I like to play Kabaddi"
        />
        <SkillList />
      </div>
      <DateAndTime />
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.image} alt="jayanth" />;
}
function Intro(props) {
  return (
    <div className="data">
      <h1>{props.name}</h1>
      <p>{props.about}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function DateAndTime() {
  const date = new Date().toLocaleDateString();
  const hour = new Date().getHours();
  const min = new Date().getMinutes();

  return (
    <div className="date-time">
      <p>
        {date}{" "}
        <strong>
          {hour}:{min}
        </strong>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
