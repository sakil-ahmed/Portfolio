import styled from "styled-components";
import THEME from "./../../../styles/theme";
import media from "./../../../styles/Responsive";

const StyleContact = styled.section`
  padding: 50px 0;
  transition: all 0.3s ease;
  .contact_badge {
    text-align: center;
    margin-bottom: 8px;
  }
  .contact_title {
    text-align: center;
  }
  .row {
    margin-top: 80px;
    margin-bottom: 150px;

    ${media.up("lg")} {
      display: flex;
      justify-content: space-between;
    }
  }
  .contact_left {
    ${media.down("lg")} {
      margin-bottom: 30px;
    }
    .contact_content {
      display: flex;
      align-items: center;
      column-gap: 25px;
      .icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: ${THEME.colors.extraText};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        margin-bottom: 15px;

        ${media.up("md")} {
          width: 88px;
          height: 88px;
        }
      }
      .description {
        font-weight: ${THEME.fontWeight.weightMedium};
      }
    }
    .location,
    .email,
    .phone {
      ${media.down("md")} {
        font-size: 24px !important;
      }
    }
  }
  .contact_right {
    width: 100%;

    ${media.up("lg")} {
      width: 50%;
    }
  }
`;

export default StyleContact;
