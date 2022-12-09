import React from "react";
import StyleWorkCard from "./StyleCard";
import { useSpring, config } from "react-spring";
import Image from "next/image";
import images from "./../../images/2.jpg";

const WorkCard = ({}) => {
  return (
    <StyleWorkCard>
      <Image
        src={images}
        alt=""
        height="100%"
        width="100%"
        style={{ objectFit: "cover" }}
      />
    </StyleWorkCard>
  );
};

export default WorkCard;
