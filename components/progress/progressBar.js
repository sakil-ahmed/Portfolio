import React from "react";
import StyledProgress from "./styledProgress";

const ProgressBar = ({ width, text }) => {
  return (
    <StyledProgress width={width}>
      <p>{text}</p>
      <div className="skill-bar skill1">
        <span className="skill-count">{width}</span>
      </div>
    </StyledProgress>
  );
};

export default ProgressBar;
