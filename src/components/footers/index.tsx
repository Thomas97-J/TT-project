import React from "react";
import styled from "styled-components";

export default function MainFooter() {
  return <FooterWrapper>footer</FooterWrapper>;
}

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 200px;
  background-color: white;
`;
