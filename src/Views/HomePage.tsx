import React, { FC } from "react";
import styled from "styled-components";

import { TopNav } from "../Component/TopNav/TopNav";
import { LeftMenu } from "../Component/LeftMenu/LeftMenu";
import { RightContent } from "../Component/RightContent/RightContent";

const Wrapper = styled.div`
  background-color: #edf2f7;
  height: auto;
  width: auto;
  z-index: 1;
  text-decoration: none;
`;

const HomePage: FC = () => {
  return (
    <Wrapper>
      <RightContent />
    </Wrapper>
  );
};
export default HomePage;
