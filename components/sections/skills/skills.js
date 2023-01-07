import React from "react";
import { StyledH2, StyledH5 } from "../../../styles/shareStyle";
import ProgressBar from "../../progress/progressBar";
import Container from "./../../container/container";
import StyledSkills from "./StyleSkills";

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <StyledH5 className="skills__badge">Skills</StyledH5>
        <StyledH2 className="skills__title">
          I Work Hard to Improve My Skills Regularly
        </StyledH2>
        <div className="row">
          <div className="left">
            <ProgressBar width="95%" text="html5" />
            <ProgressBar width="80%" text="css3" />
            <ProgressBar width="90%" text="scss" />
          </div>
          <div className="right">
            <ProgressBar width="50%" text="javascript" />
            <ProgressBar width="80%" text="reactjs" />
            <ProgressBar width="70%" text="nextjs" />
          </div>
        </div>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
