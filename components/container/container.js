import React from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = ({ children }) => {
  return <StyleContainer>{children}</StyleContainer>;
};

export default Container;
