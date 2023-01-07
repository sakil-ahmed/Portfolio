import React from "react";
import StyledProgress from "./styledProgress";

const ProgressBar = ({ width, text }) => {
  return (
    <StyledProgress width={width}>
      <p>{text}</p>
      <div class="skill-bar skill1">
        <span class="skill-count">{width}</span>
      </div>
    </StyledProgress>
  );
};

export default ProgressBar;
