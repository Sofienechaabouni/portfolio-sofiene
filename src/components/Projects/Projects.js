import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import turbidity from "../../Assets/flask server.jpg";
import hannini from "../../Assets/pandsell.png";
import yumurta from "../../Assets/Y-logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turbidity}
              isBlog={false}
              title="Design of an IoT device and mobile application for water quality assessment based on deep learning"
              description="I used React Native to develop a mobile app that collects data from an Arduino Uno and a turbidity sensor. The collected data was then used to train a model based on that dataset"
              ghLink="https://github.com/Sofienechaabouni/turbidity-app"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hannini}
              isBlog={false}
              title="Hannini mobile app "
              description="With this app you can buy and sell anything safely without the risk of being scammed."
              ghLink="https://github.com/Sofienechaabouni/Hannini/tree/main/components"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yumurta}
              isBlog={false}
              title="Yumurta mobile app "
              description="A cash register application for stores ."
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
