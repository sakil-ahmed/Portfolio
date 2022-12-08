import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledH1 } from "../../../styles/shareStyle";
import Container from "./../../container/container";
import StyleHero from "./styleHero";
import avatar from "./../../../images/avatar.png";
import { useSpring, animated, config } from "react-spring";

const calc = (x, y) => [
  (y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1,
];

const Hero = () => {
  const trans = (x, y, s) =>
    `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [1, 1, 1],
    config: config.stiff,
  }));

  return (
    <StyleHero>
      <Container>
        <div className="row">
          <div className="hero_left">
            <StyledH1 className="hero_title">
              Sakil <span>Ahmed</span>
            </StyledH1>
            <p className="job">Web Developer based In Bangladesh</p>
            <Link href="#contact" className="btn">
              <span>Get Connected</span>
            </Link>
          </div>
          <div className="hero_right">
            <animated.div
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                transform: props.xys.interpolate(trans),
              }}
            >
              <Image
                className="avatar"
                src={avatar}
                alt=""
                width="auto"
                height="auto"
              />
            </animated.div>
          </div>
        </div>
      </Container>
    </StyleHero>
  );
};

export default Hero;
