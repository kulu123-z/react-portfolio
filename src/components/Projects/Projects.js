import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import proshop from "../../Assets/Projects/proshop.png";
import breakingbad from "../../Assets/Projects/breakingbad.png";
import hackernews from "../../Assets/Projects/hackernews.png";
import quote from "../../Assets/Projects/quota.png";
import secretchat from "../../Assets/Projects/secretchat.png";
import os from "../../Assets/Projects/os.jpeg";
import medium from "../../Assets/Projects/medium.jpeg";
import opensource from "../../Assets/Projects/opensource.png";

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
              imgPath={proshop}
              isBlog={false}
              title="Proshop"
              description="This is E commerce website where you can buy product and also admin can modify product and add new product, This project is build using MERN stack, In this project you can see all the functionlity that e commerce project have."
              link="https://github.com/kulu123-z/E-Commerce-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackernews}
              isBlog={false}
              title="hacker News Clone"
              description="This is clone of offcial Hacker News website. I have used axios for fetching data from API. This website is build by ReactJS"
              link="https://github.com/kulu123-z/Hacker-News-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secretchat}
              isBlog={false}
              title="Secret Chat"
              description="This is secret chat application. This is fully secured no one can enter in this group chat untill they get username and password. It is control by admin. Here I have used chatengine for backend."
              link="https://github.com/kulu123-z/secret-chat-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breakingbad}
              isBlog={false}
              title="Breaking Bad Cast"
              description="This app show all character of breaking bad cast and show show details of each character. I have user their API for data"
              link="https://github.com/kulu123-z/Breaking-Bad-Cast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quote}
              isBlog={false}
              title="Emotion Predcition from EEG Signals"
              description="This app simply generate new quote"
              link="https://github.com/kulu123-z/Quote-Generator"
            />
          </Col>
        </Row>

        {/* blog post */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={opensource}
              link="https://kuldipmochi.hashnode.dev/important-website-for-open-source-contribution"
              title="Open Source Contribution Website"
              site="kuldipmochi.hashnode.dev"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={os}
              link="https://kuldipmochi.hashnode.dev/process-state-in-operating-system-or-operating-system-ep-05"
              title="Process State In Operating System"
              site="kuldipmochi.hashnode.dev"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={medium}
              link="https://kuldipmochi.medium.com/the-lesson-that-i-learn-at-age-19-47c7dd32c84f"
              title="The lession that I learn at Age 19"
              site="kuldipmochi.medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
