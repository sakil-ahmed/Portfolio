import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledH1 } from "../../../styles/shareStyle";
import Container from "./../../container/container";
import StyleHero from "./styleHero";
import { useSpring, animated, config } from "react-spring";
import { heroData } from "../../../data/data";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hero_left"
          >
            <StyledH1 className="hero_title">
              {heroData.name.fName} <span>{heroData.name.lName}</span>
            </StyledH1>
            <p className="job">{heroData.sub_title}</p>
            <Link href="#contact" className="btn">
              <span>{heroData.btn_text}</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hero_right"
          >
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
                src={heroData.img}
                alt=""
                width="auto"
                height="auto"
              />
            </animated.div>
          </motion.div>
        </div>
      </Container>
    </StyleHero>
  );
};

export default Hero;
