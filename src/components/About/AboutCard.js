import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sofiene Chaabouni </span>
            from <span className="purple"> Tunis,Tunisia.</span>
            <br />I am a student in Networks and telecommunications at{" "}
            <a
              href="http://www.insat.rnu.tn/Fr/accueil_46_34 "
              style={{ "text-decoration": "none" }}
              target={"_blank"}
            >
              <span className="purple">INSAT .</span>
            </a>
            <br />
            <br />I am currently learning Machine Learning and Deep Learning
            courses online and in the university to enhance my knowledge and
            skills in this field in addition to my experience in software
            development in react native and react .{" "}
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
