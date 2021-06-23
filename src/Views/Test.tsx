import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #edf2f7;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  text-decoration: none;
`;
const Content = styled.div`
position:relative;
left:900px;
`;

const Test: FC = () => {
  return( 
    <Wrapper>
      <Content>Strona testowa</Content>
    </Wrapper>
  );
  };

export default Test;
