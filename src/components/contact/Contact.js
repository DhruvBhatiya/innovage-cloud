import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/images/bg/contact.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import "./contact.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [showModal, setShowModal] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formDetails.firstName.trim()) {
      formErrors.firstName = "First name is required.";
      isValid = false;
    }

    if (!formDetails.lastName.trim()) {
      formErrors.lastName = "Last name is required.";
      isValid = false;
    }

    if (!formDetails.email.trim()) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formDetails.email)) {
      formErrors.email = "Email address is invalid.";
      isValid = false;
    }

    if (!formDetails.phone.trim()) {
      formErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formDetails.phone)) {
      formErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    }

    if (!formDetails.message.trim()) {
      formErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setButtonText("Sending...");
    try {
      const templateParams = {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
      };

      await emailjs.send(
        "service_9sjlh8m", // Replace with your EmailJS service ID
        "template_kg5i07o", // Replace with your EmailJS template ID
        templateParams,
        "qEdDoec1KQm-Kf26a" // Replace with your EmailJS public key
      );

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({
        success: true,
        message: "Message sent successfully! We will get back to you soon.",
      });
    } catch (error) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setShowModal(true); // Show the modal
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="contact gredientBg 11blackBg" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Contact Info */}

          {/* Right Column: Form */}
          <Col size={12} md={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="p-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                        />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                      </Col>
                      <Col size={12} sm={6} className="p-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                        />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                      </Col>
                      <Col size={12} sm={6} className="p-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                      </Col>
                      <Col size={12} sm={6} className="p-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                      </Col>
                      <Col size={12} className="p-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="contact-info">
                  <h3 className="text-[#a62522]">Contact Info</h3>
                  <div className="mb-3">
                    <p className="mb-2 text-[#a62522]"><strong>Address</strong></p>
                    <p className="">A-406, Titanium Square, <br />Near, Thaltej Metro Station, Thaltej, <br />Ahmedabad- 380054</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-[#a62522]"><strong>Email Us</strong></p>
                    <p><a href="mailto:info@innovagecloud.com" className="text-white hover:underline"> info@innovagecloud.com</a></p>
                    <p> <a href="mailto:hr@innovagecloud.com" className="text-white hover:underline"> hr@innovagecloud.com</a></p>
                  </div>
                  <div className="mb-3">
                    <p className="text-[#a62522]"><strong>Call Us</strong></p>
                    <p><a href="tel:+919023635219" className="text-white hover:underline">+91 9023635219</a></p>
                  </div>

                  {/* Social Media Icons */}
                  {/* <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                  </div> */}
                </div>
              )}
            </TrackVisibility>
          </Col>

          
        </Row>
      </Container>

      {/* Modal for status messages */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{status.success ? "Success" : "Error"}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: status.success ? "green" : "red",
            textAlign: "center",
          }}
        >
          {status.message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
