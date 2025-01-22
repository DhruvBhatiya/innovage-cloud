import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import 'animate.css';

import TrackVisibility from 'react-on-screen';
import { colorSharp2, } from "../../comman/images";
import { projectData } from "./projectData";
import { Box } from "@mui/material";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div
                // className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2 className="sectionTitle ">Portfolio</h2>
                  {/* <p className="subtitle">Showcasing my skills and expertise, these projects highlight real-world applications of my work. Each includes a brief description, live demos, and code repositories, demonstrating my ability to solve complex problems, adapt to various technologies, and manage projects efficiently.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Portfolio</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Clone</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">HTML</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content id="slideInUp"
                    // className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectData.map((db, index) => {
                              return (

                                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                                  {db.project.length == 0 ? <Box className="text-center">No Project Found</Box> :
                                    db.project.map((pj, index) => (
                                   
                                        <ProjectCard
                                          key={index}
                                          {...pj}
                                        />
                                    
                                    ))
                                  }
                                </Box>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectData.map((db, index) => {
                              return (
                                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                                  {db.clone.length == 0 ? <Box className="text-center">No Project Found</Box> :
                                    db.clone.map((cl, index) => (
                                      <ProjectCard
                                        key={index}
                                        {...cl}
                                      />
                                    ))
                                  }
                                </Box>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projectData.map((db, index) => {
                              return (
                                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                                  {db.html.length == 0 ? <Box className="text-center">No Project Found</Box> :
                                    db.html.map((cl, index) => (
                                      <ProjectCard
                                        key={index}
                                        {...cl}
                                      />
                                    ))
                                  }
                                </Box>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
