import styled from "styled-components";
import THEME from "./../../../styles/theme";

const StyleWork = styled.section`
  .portfolio_badge {
    text-align: center;
  }
  .portfolio_title {
    text-align: center;
  }
  .portfolio_filter {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 55px;
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
        }
        &:not(:last-child) {
          margin-right: 35px;
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
