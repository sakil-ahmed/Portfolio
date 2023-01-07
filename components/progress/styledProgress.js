import styled from "styled-components";

const StyledProgress = styled.div`
  margin-bottom: 37px;
  position: relative;
  overflow-x: hidden;

  ::before {
    content: "";
    width: 100%;
    height: 10px;
    display: block;
    position: absolute;
    background-color: #e7e5f1;
    bottom: 0;
    border-radius: 10px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    color: white;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 9px;
  }
  .skill-bar {
    width: 100%;
    height: 10px;
    display: block;
    position: relative;
    border-radius: 10px;
    background-color: #00c0ff;
    animation: animated 1s both;
    width: ${(props) => props.width};

    span {
      position: absolute;
      top: -38px;
      padding: 3px 0;
      font-size: 18px;
      font-weight: 500;
      right: 0;
      color: #00c0ff;
    }
  }

  @keyframes animated {
    from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: matrix3d(0, 0, 0);
    }
  }
`;

export default StyledProgress;
