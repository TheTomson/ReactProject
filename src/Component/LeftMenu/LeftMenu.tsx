import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IState } from "../../redux/Reducers/rootReducer";
import { IUserReducer } from "../../redux/Reducers/userReducer";
import { fetchUser, fetchUsers } from "../../redux/Actions/userActions";
import { fetchPhoto } from "../../redux/Actions/photoActions";
import { IPhoto } from "../../StyleHelpers/ApiInterfaces";
import { IPhotoReducer } from "../../redux/Reducers/photoReducer";
import { loggUserID } from "../../StyleHelpers/CurrentLogUser";

const Wrapper3 = styled.div`
  height: auto;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #edf2f7;
  position: absolute;
  z-index: 2;
`;
const Profile = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: absolute;
  top: 5%;
  left: 23px;
  box-shadow: 0px 2px 7px;
  flex-direction: column;
  border-radius: 4px;
`;
const PersonAvatar = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  position: relative;
  top: 10px;
`;
const PersonName = styled.p`
  color: blue;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  position: relative;
  bottom: 10px;
`;
const PersonHeader = styled.p`
  font-size: 14px;
  position: relative;
  bottom: 15px;
`;
const NetAndPub = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: absolute;
  top: 105.7%;
  left: 23px;
  box-shadow: 0px 2px 7px;
  white-space: nowrap;
  border-radius: 4px;
`;
const Network = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  left: 15%;
  bottom: 23%;
  font-size: 17px;
  font-weight: bold;
`;
const LeftNetworkImg = styled.img`
  height: 25px;
  position: relative;
  right: 9.5px;
`;
const RightNetworkImg = styled.img`
  height: 20px;
  width: 25px;
  position: relative;
  left: 40px;
  border: 1px solid;
  border-radius: 3px;
`;
const Publications = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  right: 50%;
  font-size: 17px;
  top: 20%;
  font-weight: bold;
`;
const LeftPublicationskImg = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  right: 8px;
`;
const RightPublicationsImg = styled.img`
  height: 20px;
  width: 25px;
  position: relative;
  left: 14px;
  border: 1px solid;
  border-radius: 3px;
`;
const Menu = styled.div`
  height: auto;
  display: flex;
  position: relative;
  top: 320px;
  left: -6%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const ImgLeftMenu = styled.img`
  height: 25px;
  width: 25px;
  position: relative;
  right: 50px;
  top: 20px;
`;
const TextLeftMenu = styled.p`
  font-size: 20px;
  font-weight: bold;
  position: relative;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: black;
  font-size: 30px;
  text-decoration: none;
`;
type fetchUser = ReturnType<typeof fetchUser>;
type fetchPhoto = ReturnType<typeof fetchPhoto>;

export const LeftMenu: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<fetchPhoto>(fetchPhoto());
  }, []);
  useEffect(() => {
    dispatch<fetchUser>(fetchUser(loggUserID.toString()));
  }, []);
  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));
  const photos = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photo,
  }));
  const photoCurrentLogg = photos.photo[loggUserID - 1];

  return (
    <Wrapper3>
      <Profile>
        <StyledLink to="/profile">
          <PersonAvatar src={photoCurrentLogg?.url}></PersonAvatar>
        </StyledLink>
        <PersonName>{users.user?.name}</PersonName>
        <PersonHeader>Job title - Company</PersonHeader>
      </Profile>
      <NetAndPub>
        <Network>
          <LeftNetworkImg src="./media/network.png" />
          Your Network
          <RightNetworkImg src="./media/user-plus.png" />
        </Network>
        <Publications>
          <LeftPublicationskImg src="./media/publications.png" />
          Your Publications
          <RightPublicationsImg src="./media/plus.png" />
        </Publications>
      </NetAndPub>

      {/* Linki - statyczne menu*/}
      <Menu>
        <StyledLink to="/publications">
          <ImgLeftMenu src="./media/publications.png" />
          <TextLeftMenu>Publications</TextLeftMenu>
        </StyledLink>
        <StyledLink to="/ecosystem">
          <ImgLeftMenu src="./media/ecosystem.png" />
          <TextLeftMenu>Ecosystem</TextLeftMenu>
        </StyledLink>
        <StyledLink to="/entities">
          <ImgLeftMenu src="./media/entities.png" />
          <TextLeftMenu>Entities</TextLeftMenu>
        </StyledLink>
      </Menu>
    </Wrapper3>
  );
};
