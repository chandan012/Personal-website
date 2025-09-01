import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function Toolstack() {
  const tools = [
    { icon: <SiLinux />, name: "Linux", color: "#FCC624" },
    { icon: <SiVisualstudiocode />, name: "VS Code", color: "#0078d7" },
    { icon: <IoLogoVercel />, name: "Vercel", color: "#FFFFFF" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <SiHeroku />, name: "Heroku", color: "#6762a6" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <div className="tool-icon">
            <div style={{ fontSize: "3rem", color: tool.color }}>
              {tool.icon}
            </div>
            <span className="tool-name" style={{ color: tool.color }}>
              {tool.name}
            </span>
          </div>
        </Col>
      ))}

      {/* CSS goes here */}
      <style>{`
        .tool-name {
          display: none;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .tool-icon:hover .tool-name {
          display: block;
          margin-top: 5px;
        }
      `}</style>
    </Row>
  );
}

export default Toolstack;
