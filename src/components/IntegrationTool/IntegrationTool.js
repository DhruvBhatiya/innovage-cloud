import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import { Box } from "@mui/material";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { IntegrationCard } from "../IntegrationCard";
import { integrationData } from "./integrationData";

export const IntegrationTool = () => {

  return (
    <section className="blackBg" id="">
      <Container>
        <Row className="aligh-items-center">
          <h2 className="sectionTitle ">Integration Tools</h2>

          <Col size={12}>
            <TrackVisibility>
              <Row>
                {
                  integrationData.map((db, index) => {
                    return (
                      <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        {db.project.length == 0 ? <Box className="text-center">No Project Found</Box> :
                          db.project.map((pj, index) => (
                            <Fade bottom>
                              <IntegrationCard
                                key={index}
                                {...pj}
                              />
                            </Fade>
                          ))
                        }
                      </Box>
                    )
                  })
                }
              </Row>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
