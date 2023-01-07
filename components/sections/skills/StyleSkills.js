import styled from "styled-components";
import media from "./../../../styles/Responsive";

const StyledSkills = styled.section`
  padding-top: 50px;
  ${media.up("lg")} {
    padding-top: 100px;
  }
  .skills__badge {
    text-align: center;
    margin-bottom: 8px;
  }
  .skills__title {
    text-align: center;
    max-width: 650px;
    margin: 0 auto 60px auto;
  }
  .row {
    ${media.up("lg")} {
      display: flex;
      gap: 150px;
    }
    .left,
    .right {
      width: 100%;
    }
  }
`;

export default StyledSkills;
