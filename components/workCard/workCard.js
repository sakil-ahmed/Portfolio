import React from "react";
import StyleWorkCard from "./StyleCard";
import Image from "next/image";
import images from "./../../images/2.jpg";
import Link from "next/link";
import { StyledH5 } from "../../styles/shareStyle";

const WorkCard = ({ href, title, img }) => {
  return (
    <StyleWorkCard>
      <Image
        className="card_images"
        src={images}
        alt=""
        height="auto"
        width="auto"
      />
      <Link target="_blank" className="link" href={href}></Link>

      <div className="card_content">
        <StyledH5 className="card_title">{title}</StyledH5>
        <h6 className="sub_title">Live Preview</h6>
      </div>
    </StyleWorkCard>
  );
};

export default WorkCard;
