import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bigdata from "../../Assets/Projects/bigdata.png";
import datastructure from "../../Assets/Projects/datastructure.png";
import dataclean from "../../Assets/Projects/dataclean.png";
import chatify from "../../Assets/Projects/chatify.png";
import employee from "../../Assets/Projects/employee.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="My Portfolio Website"
              description="personal website build with React.js"
              ghLink="https://github.com/vurudi/Portfolio"
              demoLink="https://vurudi100.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="JobQuest"
              description="JobQuest, the premier app designed to streamline your job search process. Whether you're a fresh graduate, a seasoned professional, or someone looking for a career change, JobQuest is here to make your job hunt easier and more efficient."
              ghLink="https://github.com/vurudi/JobQuest"
              demoLink="https://vurudi100.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataclean}
              isBlog={false}
              title="DataRefinery"
              description="Welcome to DataRefinery, your dynamic data analysis companion. Empowering you to transform raw data into actionable insights!"
              ghLink="https://github.com/vurudi/data-cleaning-tool/tree/"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigdata}
              isBlog={false}
              title="big data analytics"
              description="Welcome to TalentFlow Analytics, a powerful platform designed to revolutionize recruitment through the lens of big data analytics. This project is dedicated to assisting HR departments in navigating the job market with enhanced precision, leveraging data analytics for strategic talent acquisition."
              ghLink="https://github.com/vurudi/bigdata-job-market-analysis"
              demoLink="hthttps://vurudi100.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="employee_management_using_javaFX"
              description="In this module, learn advanced Java for database/file apps (4025.01.05). Streamline with lambda expressions (4025.01.06), employ streams/filters (4025.01.07), use Localization and Date/Time APIs (4025.01.08), and implement advanced exceptions (4025.01.09) for user-centric, stable applications"
              ghLink="https://github.com/vurudiJavaElevateToolkit_employee_management_using_javaFX"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datastructure}
              isBlog={false}
              title="Data structures and algorithms"

              description="Project on data structures and algorithms. The project has to main scripts that sort data. these records are over 19 million files which are randomly arranged. the program sorts this file. 
              I have implemented several sorting algorithms such as merge sort shell sort."
              
              ghLink="https://github.com/vurudi/algorithms_project1_package"
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
