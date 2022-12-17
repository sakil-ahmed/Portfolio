import React from "react";
import StyleFooter from "./styleFooter";
import Container from "./../container/container";
import { StyledH5 } from "./../../styles/shareStyle";

const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <StyledH5 className="copy__right__text">
          Developed with love by Sakil Ahmed © 2022
        </StyledH5>
      </Container>
    </StyleFooter>
  );
};

export default Footer;
