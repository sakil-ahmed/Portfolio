import styled from "styled-components";
import THEME from "./theme";

const StyledH1 = styled.h1`
  margin-bottom: 14px;
  line-height: 1.1;
  font: normal ${THEME.fontWeight.weightSemiBold} 75px ${THEME.fonts.Poppins};
  color: ${THEME.colors.white};
`;
const StyledH2 = styled.h2``;

export { StyledH1, StyledH2 };
