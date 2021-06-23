import React, { FC, useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/Actions/userActions";
import { IState } from "../../redux/Reducers/rootReducer";
import { IUserReducer } from "../../redux/Reducers/userReducer";
import { loggUserID } from "../../StyleHelpers/CurrentLogUser";
import { fetchPhoto } from "../../redux/Actions/photoActions";
import { IPhotoReducer } from "../../redux/Reducers/photoReducer";

const Menu = styled.div`
  height: 700px;
  left: 170px;
  top: 50px;
  width: 14vw;
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
`;

const InputWrapper = styled.div`
  width: 90%;
  margin-right: 6px;
  margin-top: 3px;
`;

const CInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 3px;
`;
const TitlesPWA = styled.p`
  font-size: 18px;
  color: grey;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CustomIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 5px;
  margin-bottom: 13px;
`;
const CustomText = styled.span`
  font-size: 14px;
  font-family: Arial, sans-serif;
  align-items: center;
  position: relative;
  left: 15px;
  bottom: 18px;
  font-weight: bold;
`;
const ProfileIMG = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  left: -85px;
  bottom: 12px;
`;
const ProfileName = styled.p`
  position: relative;
  bottom: 50px;
  right: 7px;
  font-size: 16px;
`;
const ProfilDescription = styled.p`
  position: relative;
  bottom: 55px;
  right: 29px;
  font-size: 13px;
  color: blue;
`;
const LogoutButton = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid;
  position: relative;
  bottom: 75px;
`;
const CustomTextLog = styled.span`
  font-size: 21px;
  color: grey;
  position: relative;
  left: 60px;
`;
const CustomIMGLog = styled.img`
  position: relative;
  left: 40px;
`;
const CustomIconPS = styled.img`
  position: relative;
  right: 85px;
  bottom: 50px;
`;
const CustomTextPS = styled.span`
  font-size: 14px;
  font-family: Arial, sans-serif;
  align-items: center;
  position: relative;
  right: 32px;
  bottom: 79px;
  font-weight: bold;
`;

const Scroll = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StylLink = styled(Link)`
  color: black;
  font-size: 30px;
  text-decoration: none;
  position: relative;
  top: 15px;
`;
type fetchUser = ReturnType<typeof fetchUser>;
type fetchPhoto = ReturnType<typeof fetchPhoto>;

export const ExpandedMenu: FC = () => {
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

  const [inputText, setInputText] = useState<string>("");
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  return (
    <Menu>
      <InputWrapper>
        <CInput
          placeholder="Filter...."
          type="text"
          value={inputText}
          onChange={inputHandler}
        />
      </InputWrapper>
      <Scroll>
        <TitlesPWA>Platform</TitlesPWA>
        {"Home".toLowerCase().includes(inputText.toLowerCase()) && (
          <StylLink to="/">
            <CustomIcon src="./media/house.png"></CustomIcon>
            <CustomText>Home</CustomText>
          </StylLink>
        )}
        {"Publications".toLowerCase().includes(inputText.toLowerCase()) && (
          <StylLink to="/publications">
            <CustomIcon src="./media/publications.png"></CustomIcon>
            <CustomText>Publications</CustomText>
          </StylLink>
        )}
        {"People".toLowerCase().includes(inputText.toLowerCase()) && (
          <StylLink to="/test">
            <CustomIcon src="./media/people.png"></CustomIcon>
            <CustomText>People</CustomText>
          </StylLink>
        )}
        {"Entities".toLowerCase().includes(inputText.toLowerCase()) && (
          <StylLink to="/entities">
            <CustomIcon src="./media/entities2.png"></CustomIcon>
            <CustomText>Entities</CustomText>
          </StylLink>
        )}
        {"Administration".toLowerCase().includes(inputText.toLowerCase()) && (
          <StylLink to="/test">
            <CustomIcon src="./media/administration.png"></CustomIcon>
            <CustomText>Administration</CustomText>
          </StylLink>
        )}
        <TitlesPWA>Workspaces</TitlesPWA>
        {"Client contract".toLowerCase().includes(inputText.toLowerCase()) && (
          <StylLink to="/test">
            <CustomIcon src="./media/settings.png"></CustomIcon>
            <CustomText>Client contract</CustomText>
          </StylLink>
        )}
        {"Supplier contract"
          .toLowerCase()
          .includes(inputText.toLowerCase()) && (
          <StylLink to="/test">
            <CustomIcon src="./media/cog.png"></CustomIcon>
            <CustomText>Supplier contract</CustomText>
          </StylLink>
        )}
        {"Corporate".toLowerCase().includes(inputText.toLowerCase()) && (
          <StylLink to="/test">
            <CustomIcon src="./media/entities2.png"></CustomIcon>
            <CustomText>Corporate</CustomText>
          </StylLink>
        )}
        {"Group Norms".toLowerCase().includes(inputText.toLowerCase()) && (
          <StylLink to="/test">
            <CustomIcon src="./media/ecosystem.png"></CustomIcon>
            <CustomText>Group Norms</CustomText>
          </StylLink>
        )}
        {"Real estate contracts"
          .toLowerCase()
          .includes(inputText.toLowerCase()) && (
          <StylLink to="/test">
            <CustomIcon src="./media/privacy.png"></CustomIcon>
            <CustomText>Real estate contracts</CustomText>
          </StylLink>
        )}
      </Scroll>
      <TitlesPWA>Account</TitlesPWA>
      <ProfileIMG src={photoCurrentLogg?.url}></ProfileIMG>
      <ProfileName>{users.user?.name}</ProfileName>
      <Link to="/profile">
        <ProfilDescription>See profile</ProfilDescription>
      </Link>
      <CustomIconPS src="./media/privacy.png"></CustomIconPS>
      <CustomTextPS>Privacy</CustomTextPS>
      <CustomIconPS src="./media/settings.png"></CustomIconPS>
      <CustomTextPS>Settings</CustomTextPS>
      <LogoutButton>
        <CustomIMGLog src="./media/logout.png"></CustomIMGLog>
        <CustomTextLog>Logout</CustomTextLog>
      </LogoutButton>
    </Menu>
  );
};
