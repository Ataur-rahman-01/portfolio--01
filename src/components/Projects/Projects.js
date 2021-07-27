import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import premier from "../../Assets/Projects/premier-league.jpg";
import shop from "../../Assets/Projects/chat-app.jpg";
import sweet from "../../Assets/Projects/sweet-memory.jpg";
import car from "../../Assets/Projects/react-router.jpg";

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
              imgPath={car}
              isBlog={false}
              title="Protected Route and FireBase Login"
              description="React router and Firebase Basic use case and Google map show."
              link="https://github.com/Ataur-rahman-01/React-simple-auth-private-route"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Chating application For Group-chat"
              description="Online basic Chat app Node js Express js Socketio frontend React js"
              link="https://github.com/Ataur-rahman-01/realtime-chat-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sweet}
              isBlog={false}
              title="MERN Stack Application"
              description="MERN Stack Application with Basic CRUD Operation"
              link="https://github.com/Ataur-rahman-01/your-shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={premier}
              isBlog={false}
              title="Premier-League "
              description="Feature.Show all teams in premier league.Show details of teams.Have conditional render image."
              link="https://github.com/Ataur-rahman-01/premier-league"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        {/* <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
