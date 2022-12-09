import styled from "styled-components";
import THEME from "./../../styles/theme";
import media from "./../../styles/Responsive";

const StyledHeader = styled.header`
  padding: 30px 0;
  position: relative;
  ${media.down("md")} {
    background-color: ${THEME.colors.headerBG};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  ${media.down("md")} {
    padding: 15px 0;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header_content {
      display: flex;
      align-items: center;

      .nav_menu {
        ${media.down("md")} {
          position: absolute;
          top: 100%;
          left: -100%;
          width: 100%;
          background-color: ${THEME.colors.headerBG};
          padding: 30px;
          transition: all 0.2s linear;
          z-index: 10;
        }
      }
      .open_mobile_menu {
        ${media.down("md")} {
          left: 0;
        }
      }

      .nav_menu_items {
        ${media.up("md")} {
          display: flex;
        }
        .nav_menu_item {
          ${media.down("md")} {
            margin: 20px 0;
          }
          &:not(:last-child) {
            margin-right: 30px;
          }

          a {
            font: normal ${THEME.fontWeight.weightMedium} 16px
              ${THEME.fonts.OpenSans};
            line-height: 20px;
            transition: all 0.3s ease;
            &:hover {
              color: ${THEME.colors.extraText};
            }
          }
        }
      }

      .social_links {
        display: flex;
        margin-left: 60px;
        position: relative;
        margin-bottom: -3px;

        ${media.down("md")} {
          display: none;
        }

        &::before {
          position: absolute;
          content: "|";
          left: -30px;
          top: 2;
          color: ${THEME.colors.mainColor};
          font-size: 16px;
          font-family: ${THEME.fonts.OpenSans};
        }

        .link {
          &:not(:last-child) {
            margin-right: 12px;
          }

          a {
            font-size: 20px;
            line-height: 30px;
          }
        }
      }
    }
  }
`;

export default StyledHeader;
