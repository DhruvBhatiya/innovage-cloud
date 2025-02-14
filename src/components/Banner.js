import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";


import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { headerImg } from "../comman/images";
import bannerImg from "../assets/images/bg/banner-vector.svg"
import ReadMoreLess from "./ReadMoreLess";







export const Banner = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Frontend Developer",
    "React Js Developer",
    "Web Developer",
    "Web Designer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const longText = `
  Innovage Cloud was founded in January 2022 with a clear vision to provide cutting-edge consulting and software development services that empower businesses to thrive in a digital-first world.

  Our team of passionate developers, designers, and technology experts is committed to delivering innovative and robust solutions tailored to meet the unique needs of each client. Whether it's streamlining operations, improving productivity, or driving digital transformation, we create software that enables businesses to achieve their goals.

  Serving clients in India, the Middle East, and North America, we understand the importance of flexibility and adapt to our customers' schedules to ensure seamless collaboration. Headquartered in Ahmedabad, India, we bring global expertise with a local touch, focused on delivering exceptional value and results.
   Let us help you harness the power of technology to take your business to the next level.
`;

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} lg={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">Welcome to Innovage Cloud</span> */}

                  <h1>
                    {`Welcome to Innovage Cloud`}{" "}
                    {/* <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Frontend Developer", "React Js Developer", "Web Developer", "Web Designer",  ]'
                    >
                      <span className="wrap">{text}</span>
                    </span> */}
                  </h1>


                  <ReadMoreLess text={longText} charLimit={800} />

                  <a href="#connect">
                    <button onClick={() => console.log("connect")}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>

                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} lg={5} xl={5} className="hidden md:hidden lg:block xl:block">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={bannerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
