import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  flex: none;
  background-color: rgb(232, 232, 232);
  color: rgb(0, 0, 0);
  padding-top: 10px;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    Made by Teaz3
  </StyledFooter>
);

export default Footer;
