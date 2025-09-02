import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          A collection of research and applied projects showcasing skills in predictive modeling, clustering, classification, ETL pipelines, and interactive dashboards. Developed through my Post-Degree Diploma in Data Analytics at Langara College and professional experience, each project highlights turning real-world data into actionable insights.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "data analysis" ? (
            <ToggleButton
              active
              value="data analysis"
              onClick={() => setToggle("data analysis")}
            >
              DATA ANALYSIS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="data analysis"
              onClick={() => setToggle("data analysis")}
            >
              DATA ANALYSIS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "data science" ? (
            <ToggleButton
              active
              value="data science"
              onClick={() => setToggle("data science")}
            >
              DATA SCIENCE
            </ToggleButton>
          ) : (
            <ToggleButton
              value="data science"
              onClick={() => setToggle("data science")}
            >
              DATA SCIENCE
            </ToggleButton>
          )}
          <Divider />
          {toggle === "data engineering" ? (
            <ToggleButton
              active
              value="data engineering"
              onClick={() => setToggle("data engineering")}
            >
              DATA ENGINEERING
            </ToggleButton>
          ) : (
            <ToggleButton value="data engineering" onClick={() => setToggle("data engineering")}>
              DATA ENGINEERING
            </ToggleButton>
          )}
          {/* <Divider />
          {toggle === "research paper" ? (
            <ToggleButton
              active
              value="research paper"
              onClick={() => setToggle("research paper")}
            >
              RESEARCH PAPER
            </ToggleButton>
          ) : (
            <ToggleButton
              value="research paper"
              onClick={() => setToggle("research paper")}
            >
              RESEARCH PAPER
            </ToggleButton>
          )} */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                key={project.id}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                key={project.id}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
