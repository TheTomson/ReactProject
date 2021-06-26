import React, { FC } from "react";
import styled from "styled-components";

import { Workspace } from "../Workspace/Workspace";

const Wrapper = styled.div`
  background-color: #edf2f7;
  height: auto;
  width: auto;
  z-index: 1;
  text-decoration: none;
`;

const Workspaces: FC = () => {
  return (
    <Wrapper>
      <Workspace />
    </Wrapper>
  );
};
export default Workspaces;
