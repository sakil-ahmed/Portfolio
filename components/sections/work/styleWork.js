import styled from "styled-components";
import THEME from "./../../../styles/theme";
import media from "./../../../styles/Responsive";

const StyleWork = styled.section`
  padding-top: 100px;
  ${media.down("md")} {
    padding-top: 50px;
  }
  .portfolio_badge {
    text-align: center;
    margin-bottom: 8px;
  }
  .portfolio_title {
    text-align: center;
  }
  .portfolio_filter {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 55px;
    ${media.down("md")} {
      margin-top: 30px;
    }
    .filter {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      &_item {
        a {
          color: ${THEME.colors.white};
          font-weight: ${THEME.fontWeight.weightMedium};
          font-family: ${THEME.fonts.OpenSans};
          transition: all 0.3s ease-in-out;
          &:hover {
            color: ${THEME.colors.extraText};
          }
        }

        &:not(:last-child) {
          margin-right: 35px;
        }
      }
      .active {
        a {
          color: ${THEME.colors.extraText};
        }
      }
    }
  }
  .portfolio_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
`;

export default StyleWork;
