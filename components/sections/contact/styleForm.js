import styled from "styled-components";
import media from "../../../styles/Responsive";
import THEME from "./../../../styles/theme";

const StyleForm = styled.form`
  .display_flex {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  input[type="number"] {
    appearance: none;
  }

  input,
  textarea {
    width: 100%;
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
    height: 58px;
    padding: 0px 30px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    color: ${THEME.colors.mainColor};
    font-size: 18px;
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 16px 30px 30px 30px !important;
    resize: none;

    margin-bottom: 4px;
  }

  .input_group {
    &:not(:last-child) {
      width: 100%;
      ${media.up("sm")} {
        width: calc(50% - 6px);
      }
    }
    &:last-child {
      width: 100%;
    }
  }
`;

export default StyleForm;
