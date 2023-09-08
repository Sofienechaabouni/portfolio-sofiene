import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiTensorflow } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons sof" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Javascript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Node Js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="React ">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Mongo DB">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons sof" title="git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Pytorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons sof" title="Tensorflow">
        <SiTensorflow />
      </Col>
    </Row>
  );
}

export default Techstack;
