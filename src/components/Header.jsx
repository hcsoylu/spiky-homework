import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderBox>Weather Forecaster</HeaderBox>;
};

export default Header;

const HeaderBox = styled.div`
  height: 80px;
  background-color: #545454;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 32px;
`;
