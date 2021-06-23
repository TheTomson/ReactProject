import React, { FC } from "react";
import styled from "styled-components";
import { Profiled } from "../Component/Profile/Profiled";

const Wrapper = styled.div`
  background-color: #edf2f7;
  height: auto;
  width: 100vw;
  z-index: 1;
  text-decoration: none;
`;
const Content = styled.div`
  position: relative;
  left: 900px;
`;
const Profile: FC = () => {
  return (
    <Wrapper>
      <Profiled />
    </Wrapper>
  );
};

export default Profile;
