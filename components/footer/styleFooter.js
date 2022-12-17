import styled from "styled-components";
import THEME from "./../../styles/theme";

const StyleFooter = styled.footer`
  padding: 50px 0;
  .copy__right__text {
    text-align: center;
    font-size: 16px;
    color: ${THEME.colors.mainColor};
    font-weight: ${THEME.fontWeight.weightSemiBold};
  }
`;

export default StyleFooter;
