import styled from "styled-components";
import THEME from "./../../../styles/theme";
import media from "./../../../styles/Responsive";

const StyleHero = styled.section`
  .row {
    display: flex;
    align-items: center;
    ${media.down("lg")} {
      flex-direction: column-reverse;
    }

    .hero_left {
      ${media.up("lg")} {
        width: 50%;
      }
      ${media.down("lg")} {
        text-align: center;
        margin-bottom: 30px;
      }
    }
    .hero_title {
      ${media.down("md")} {
        font-size: 50px;
      }
      span {
        color: ${THEME.colors.extraText};
      }
    }
    .job {
      margin-bottom: 35px;
      font: normal ${THEME.fontWeight.weightMedium} 20px ${THEME.fonts.Poppins};
    }
    .hero_right {
      ${media.up("lg")} {
        padding-left: 80px;
      }
      ${media.down("lg")} {
        margin-bottom: 30px;
      }

      .avatar {
        ${media.up("sm")} {
          max-width: 400px;
        }
        ${media.down("md")} {
          max-width: 200px;
        }

        height: auto;
        object-fit: cover;
      }
    }
  }
`;

export default StyleHero;
