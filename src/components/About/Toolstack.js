import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiPowerbi,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons sof" title="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Power BI">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Heroku">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
