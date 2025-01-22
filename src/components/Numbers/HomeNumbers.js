import React from "react";

import "./HomeNumbers.css";  // Ensure to create a CSS file for styles

import { Row, Container, Col } from "react-bootstrap";

const HomeNumbers = () => {

  const Number = [
    {
      value: '$6M+',
      text: 'Value Realized for Customers'
    },
    {
      value: '15+',
      text: 'Oracle Projects executed by our core team in the past'
    },
    {
      value: '20+',
      text: 'Countries served by our core team in past'
    },
    {
      value: '10+',
      text: 'Industries served'
    },
  ]
  return (
    <section className="gredientBg ">
      <Container >
        <Row className="" >
          {Number.map((db) => (
            <Col xs={12} md={3} xl={3} className="mb-2 md:mb-0 lg:mb-0 xl:mb-0">
            
           
                <div className="hnum-box text-center ">
                  <h3 className=" ">{db.value}</h3>
                  <p>{db.text}</p>
                </div>
             
            </Col>
          ))}

        </Row>
      </Container>
    </section>
  );
};

export default HomeNumbers;
