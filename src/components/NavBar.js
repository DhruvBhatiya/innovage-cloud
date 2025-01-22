import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/images/logo/Innovage_white_logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // Add state to manage menu expansion

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Close the menu after clicking a link
  };

  return (
    <Navbar
      expand="md"
      className={scrolled ? "scrolled" : ""}
      expanded={expanded} // Bind expanded state
      style={{zIndex: 1}}
    >
      <Container>
        <Navbar.Brand className="flex gap-2 items-center px-2 !w-[250px] md:!w-[300px]" href="/">
          <img src={logo} alt="Logo" className="!w-[250px] md:!w-[300px]" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle the menu
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto uppercase gap-y-3">
            <Nav.Link
              href="#about"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('services')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/innovage-cloud/posts/?feedView=all" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
            </div>
            <HashLink to="#connect" onClick={() => setExpanded(false)}>
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
