import { createGlobalStyle } from "styled-components";
import THEME from "./theme";

const GlobalStyles = createGlobalStyle`


*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
  transition: all .3s ease;
  scroll-behavior: smooth;
}

body {
  font-family: ${THEME.fonts.OpenSans};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-image: url("https://marketifythemes.net/html/foliox//img/hero/1.jpg");
  /* width: 100%;
  height: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
  color: ${THEME.colors.white};
  cursor: auto !important;

}

img, picture, video, canvas, svg {
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}


p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
 ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}

a,button{
  cursor: pointer !important;
}
a{
  text-decoration: none;
  color: ${THEME.colors.white};
}

#root, #__next {
  isolation: isolate;
}

/* Custom Btn */

.btn{
  font-family: ${THEME.fonts.OpenSans};
  color: ${THEME.colors.white};
  display: inline-block;
  background-color: ${THEME.colors.extraText};
  padding: 18px 43px;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  transition: all .3s ease;
  border: none;
  outline: none;
  font-weight: ${THEME.fontWeight.weightMedium};

  span{
    position: relative;
    z-index: 2;
    transition: all .3s ease;
    font-family: ${THEME.fonts.OpenSans};
  }
  &::before{
    position: absolute;
    content: "";
    left: -10px;
    right: -10px;
    bottom: -10px;
    top: -10px;
    background-color: ${THEME.colors.white};
    transform: translateY(100%);
    transition: all .3s ease;
  }
  &:hover::before{
    transform: translateY(0)
  }
 &:hover{
  span{
    color: ${THEME.colors.black};
  }
 } 
}


/* Description */

.description{
font: normal ${THEME.fontWeight.weightNormal} 16px ${THEME.fonts.OpenSans};
color: ${THEME.colors.mainColor};

}
`;

export default GlobalStyles;
