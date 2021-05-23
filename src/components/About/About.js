import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profile from "../../Assets/profile2.jpeg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="about-img"
          >
            <img src={profile} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Frontend <strong className="purple">Technology </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-html5-plain-wordmark" />
          <Techstack iconName="devicon-css3-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-javascript-plain" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="cib-next-js"/>
          <Techstack iconName="devicon-materialui-plain"/>
          <Techstack iconName="devicon-redux-original"/>
        </Row>
        <h1 className="project-heading">
          Backend <strong className="purple">Technology </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-cplusplus-line" />
          <Techstack iconName="devicon-java-plain-wordmark" />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
        </Row>
        <h1 className="project-heading">
          Database <strong className="purple">Technology </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          Package <strong className="purple">Manager </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-npm" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="devicon-windows8-original" />
          <Techstack iconName="devicon-github-original-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-netlify" />
          <Techstack iconName="cib-heroku" />
        </Row>
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
