import styled from "styled-components";
import THEME from "./../../styles/theme";

const StyleWorkCard = styled.div`
  width: 334px;
  height: 334px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  img {
    transition: all 0.75s cubic-bezier(0, 0, 0.2, 1);
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    .card_content {
      bottom: 20px;
    }
  }
  .link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
  }
  .card_images {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .card_content {
    position: absolute;
    bottom: -100%;
    left: 50%;
    background-color: #1e1345;
    width: calc(100% - 40px);
    transform: translateX(-50%);
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
    .card_title {
      font-weight: ${THEME.fontWeight.weightMedium};
      font-family: ${THEME.fonts.OpenSans};
      text-align: center;
      color: ${THEME.colors.white};
      margin-bottom: 5px;
    }
    .sub_title {
      font-family: ${THEME.fonts.Poppins};
      text-align: center;
      color: ${THEME.colors.mainColor};
    }
  }
`;

export default StyleWorkCard;
