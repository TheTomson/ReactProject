import React, { FC } from "react";
import styled from "styled-components";
import { EntitiesParent } from "../Component/Entities/EntitiesParent";

const Wrapper = styled.div`
  background-color: #edf2f7;
  height: 100%;
  width: 100vw;
  z-index: 1;
  text-decoration: none;
`;
const Content = styled.div`
  margin-left: 20%;
  font-weight: bold;
  font-size: 30px;
`;

const Entities: FC = () => {
  return (
    <Wrapper>
      <Content>Entities</Content>
      <EntitiesParent></EntitiesParent>
    </Wrapper>
  );
};
export default Entities;
