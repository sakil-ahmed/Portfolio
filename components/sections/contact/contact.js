import React from "react";
import StyleContact from "./styleContact";
import Container from "./../../container/container";
import { StyledH2, StyledH3, StyledH5 } from "../../../styles/shareStyle";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <StyleContact id="contact">
      <Container>
        <StyledH5 className="contact_badge">Contact</StyledH5>
        <StyledH2 className="contact_title">I Want to Hear from You</StyledH2>
        <div className="row">
          <div className="contact_left">
            {/* Location */}

            <div className="contact_content location">
              <div className="icon">
                <MdLocationOn />
              </div>

              <div className="text">
                <StyledH3>Address</StyledH3>
                <p className="description">Tangail , Dhaka , Bangladesh</p>
              </div>
            </div>
            {/* Email */}
            <div className="contact_content email">
              <div className="icon">
                <MdEmail />
              </div>

              <div className="text">
                <StyledH3>Email</StyledH3>
                <Link className="description" href="/">
                  sakilahmed.dev@gmail.com
                </Link>
              </div>
            </div>
            {/* Phone */}
            <div className="contact_content phone">
              <div className="icon">
                <BsTelephoneFill />
              </div>

              <div className="text">
                <StyledH3>Phone</StyledH3>
                <p className="description">+880 1729-925644</p>
              </div>
            </div>
          </div>
          <div className="contact_right">
            <ContactForm />
          </div>
        </div>
      </Container>
    </StyleContact>
  );
};

export default Contact;
