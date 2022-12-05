import styled from "styled-components";
import THEME from "./../../../styles/theme";
import media from "./../../../styles/Responsive";

const StyleHero = styled.section`
  .row {
    display: flex;
    align-items: center;

    .hero_left {
      width: 50%;
    }
    .hero_title {
      span {
        color: ${THEME.colors.extraText};
      }
    }
    .job {
      margin-bottom: 35px;
      font: normal ${THEME.fontWeight.weightMedium} 20px ${THEME.fonts.Poppins};
    }
    .hero_right {
      padding-left: 80px;

      .avatar {
        max-width: 400px;
        height: auto;
        object-fit: cover;
      }
    }
  }
`;

export default StyleHero;
