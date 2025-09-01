import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Chandan_SDE_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Prompt Engineer – Zensar Technologies"
              date="October 2024 - Feb 2025"
              content={[
                "Worked on Nvidia’s LLM project.",
                "Designed, tested, and optimized high-quality prompts for various AI models.",

             "Worked with NLP and LLM frameworks.",
              "Created Python scripts to preprocess and clean datasets for fine-tuning.",             "Utilized NLP libraries such as spaCy, NLTK, and TextBlob.",
              ]}
            />






            <Resumecontent
              title="Website Developer intern (Baoiam Innovations Pvt Ltd)"
              date="Jan 2023 - March 2023"
              content={[
                "Learned and experiment with React.js, Node.js, Rest API.",
                " Led a team of 4 in designing client web pages.",
              ]}
            />
            <Resumecontent
              title="Cyber Data Analyst Intern (Nexus Infosec LLC)"
              date="March 2023 - June 2023"
              content={[
                "Led a team of 5 for scraping and analysis of cybersecurity datasets.",
               "Applied Python and its libaries for preprocessing and analysis."
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachleor's of Computer Engineering [D.Y Patil College Of Engineering Akurdi, Pune] "
              date="2020 - 2024"
              content={[
                `CGPA: 8.14/10 `,
                "I have completed my bachleor's degree from D.Y Patil College Of Engineering Akurdi, Pune.",
                "During my studies at D.Y patil college, I honed my skills in MERN stack, Python, data analytics.  "
              ]}
            />

            
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
