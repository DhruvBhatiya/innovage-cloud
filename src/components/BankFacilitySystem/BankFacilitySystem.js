import { Col, Container, Row } from "react-bootstrap";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const BankFacilitySystem = () => {

  return (
    <section className="gredientBg" id="">
      <Container>
        <Row className="aligh-items-center">
          <h2 className="sectionTitle ">Bank Facility System</h2>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>

            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
