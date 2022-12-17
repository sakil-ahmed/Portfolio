import styled from "styled-components";
import THEME from "./theme";
import media from "./Responsive";

// H1 Styles
const StyledH1 = styled.h1`
  margin-bottom: 14px;
  line-height: 1.1;
  font: normal ${THEME.fontWeight.weightSemiBold} 75px ${THEME.fonts.Poppins};
  color: ${THEME.colors.white};
`;

// H2 Styles
const StyledH2 = styled.h2`
  line-height: 1.3;
  font: normal ${THEME.fontWeight.weightSemiBold} 40px ${THEME.fonts.Poppins};
  color: ${THEME.colors.white};
  ${media.down("md")} {
    font-size: 30px;
  }
`;

// H3 Styles
const StyledH3 = styled.h3`
  font: normal ${THEME.fontWeight.weightSemiBold} 28px ${THEME.fonts.Poppins};
  line-height: 1.3;
  color: ${THEME.colors.white};
  ${media.down("md")} {
    font-size: 22px;
  }
`;

// H5 Styles
const StyledH5 = styled.h5`
  color: ${THEME.colors.extraText};
  font: normal ${THEME.fontWeight.weightMedium} 21px ${THEME.fonts.Poppins};
  ${media.down("md")} {
    font-size: 18px;
  }
`;

export { StyledH1, StyledH2, StyledH3, StyledH5 };
