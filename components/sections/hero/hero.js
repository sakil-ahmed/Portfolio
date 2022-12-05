import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledH1 } from "../../../styles/shareStyle";
import Container from "./../../container/container";
import StyleHero from "./styleHero";
import avatar from "./../../../images/avatar.png";

const Hero = () => {
  return (
    <StyleHero>
      <Container>
        <div className="row">
          <div className="hero_left">
            <StyledH1 className="hero_title">
              Sakil <span>Ahmed</span>
            </StyledH1>
            <p className="job">Web Developer based In Bangladesh</p>
            <Link href="#" className="btn">
              <span>Get Connected</span>
            </Link>
          </div>
          <div className="hero_right">
            <Image
              className="avatar"
              src={avatar}
              alt=""
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </Container>
    </StyleHero>
  );
};

export default Hero;
