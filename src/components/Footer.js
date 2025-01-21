import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { Navbar,  } from "react-bootstrap";
import logo from '../assets/images/logo/Innovage_white_logo.png';

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  // console.log("year", year)
  const projectName = '<InnovageCloud />'


  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <Navbar.Brand className="flex gap-2 items-center  px-2 !w-[324px]" href="/">
            <img  src={logo} alt="Logo" className="!w-[324px]" />
              {/* <h1 className="text-white mb-0">{projectName}</h1> */}
            </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/company/innovage-cloud/posts/?feedView=all"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              {/* <a
                href=""
                target="_blank"
              >
                <img src={navIcon2} alt="" />
              </a> */}
              {/* <a
                href=""
                target="_blank"
              >
                <img src={navIcon3} alt="" />
              </a> */}
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
