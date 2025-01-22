import { Box } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../../assets/img/color-sharp.png";
import { skillsData } from "./skillsData";
// Skill

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn !py-28">
              {/* <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <Box className="flex flex-wrap gap-7 justify-center">
                {skillsData &&
                  skillsData.map((db) => (
                   
                      <Box className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full bg-white flex justify-center items-center shadow-lg shadow-white">
                        <img
                          className="w-[70px] h-[70px] lg:w-[130px] lg:h-[130px] rounded-full"
                          src={db}
                          alt="Image"
                        />
                      </Box>
                  
                  ))}
              </Box>

              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
