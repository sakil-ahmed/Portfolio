import React, { useState } from "react";
import styled from "styled-components";
import media from "./../../styles/Responsive";

// Mobile Menu bar style
const StyledBar = styled.div`
  ${media.up("md")} {
    display: none;
  }
  .toggle_btn {
    width: 25px;
    height: 28px;
    color: #fff;
    display: flex;
    align-items: end;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s linear;
    span {
      width: 30px;
      height: 4px;
      border-radius: 100px;
      margin-top: 3px;
      margin-bottom: 3px;
      background-color: #fff;
      transition: all 0.3s linear;
    }
  }
  .close_toggle {
    transition: all 0.3s linear;
    span {
      &:nth-child(1) {
        transform: translateY(8px) rotate(-45deg);
        transition: all 0.3s linear;
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-11px) rotate(45deg);
        transition: all 0.3s linear;
      }
    }
  }
`;

// return jsx
const MobileMenu = ({ toggle, HandleToggle }) => {
  return (
    <StyledBar className="mobile_menu_bar">
      <div
        className={toggle ? "toggle_btn close_toggle" : "toggle_btn"}
        onClick={HandleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledBar>
  );
};

export default MobileMenu;
