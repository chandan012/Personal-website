import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiFirebase, SiTypescript, SiAmazonaws } from "react-icons/si";

const techs = [
  { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <DiNodejs />, name: "Node.js", color: "#68A063" },
  { icon: <DiReact />, name: "React", color: "#61DBFB" },
  { icon: <DiMongodb />, name: "MongoDB", color: "#4DB33D" },
  { icon: <DiPython />, name: "Python", color: "#3776AB" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiAmazonaws />, name: "AWS", color: "#FF9900" },
  { icon: <DiGit />, name: "Git", color: "#F1502F" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ textAlign: "center" }}
        >
          <div className="icon-wrapper">
            <div className="icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <div className="label" style={{ color: tech.color }}>
              {tech.name}
            </div>
          </div>
        </Col>
      ))}

      <style>
        {`
          .icon-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: transform 0.3s;
          }
          .icon {
            font-size: 3rem;
            cursor: pointer;
            transition: transform 0.3s;
          }
          .label {
            font-size: 0.9rem;
            margin-top: 8px;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .icon-wrapper:hover .label {
            opacity: 1;
          }
          .icon-wrapper:hover .icon {
            transform: scale(1.2);
          }
        `}
      </style>
    </Row>
  );
}

export default Techstack;
