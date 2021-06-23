import React, { FC } from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import { ExpandedMenu } from "../ExpandedMenu/ExpandedMenu";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  background-color: #fbfbfb;
  justify-content: space-between;
  width: 100%;
  height: auto;
  box-shadow: 0px -1px 10px;
  margin-bottom: 10px;
`;
const LeftImgL = styled.img`
  height: auto;
  width: 60px;
  position: relative;
  left: 10px;
`;
const LeftImgH = styled.img`
  height: 35px;
  width: 35px;
  position: fixed;
  left: 100px;
  top: 15px;
`;
const WrapperTaI = styled.div`
  height: 3%;
  width: 7%;
  display: flex;
  align-items: center;
  position: fixed;
  left: 170px;
  font-size: 23px;
  cursor: pointer;
  z-index: 999;
`;
const TextandImg = styled.div`
  height: 3%;
  width: 7%;
  display: flex;
  align-items: center;
  position: fixed;
  left: 170px;
  font-size: 23px;
  cursor: pointer;
  z-index: 999;
`;
const TextHome = styled.p`
  position: fixed;
  top: 27px;
`;
const ImgArrow = styled.img`
  position: fixed;
  left: 275px;
  top: 36px;
`;
const SearchDiv = styled.div`
  width: 50%;
  height: 4%;
  left: 26%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 94%;
  border: none;
  font-size: 16px;
  text-align: center;
  position: relative;
  &:focus {
    z-index: 2;
    background-color: lightblue;
  }
`;
const SearchImg = styled.img`
  position: absolute;
  pointer-events: none;
  right: 0.5%;
`;
const RightIcons = styled.div`
  display: flex;
  position: relative;
  right: 0px;
  top: 8px;
`;
const RightIconsAFT = styled.div`
  &:after {
    content: "3";
    display: block;
    position: relative;
    left: 21px;
    bottom: 36px;
    border-radius: 6px;
    background-color: #8fd6e1;
    text-align: center;
    line-height: 15px;
    font-size: 17px;
    height: 15px;
    width: 20px;
  }
`;
const RightImg = styled.img`
  height: 25px;
  width: 28px;
  padding-right: 26px;
  opacity: 0.65;
  &:hover {
    opacity: 1;
  }
`;

export const TopNav: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuOpen = () => {
    toggleDropdown();
  };
  return (
    <Wrapper2>
      <LeftImgL src="./media/logo.png" />
      <Link to="/">
        <LeftImgH src="./media/house2.png" />
      </Link>
      <WrapperTaI ref={wrapperRef}>
        <TextandImg onClick={menuOpen}>
          <TextHome>Home</TextHome>
          <ImgArrow src="./media/arrow-down.png" />
        </TextandImg>
        {dropdownOpen && <ExpandedMenu />}
      </WrapperTaI>
      <SearchDiv>
        <SearchInput type="text" placeholder="Search Legalcluster" />
        <SearchImg src="./media/search.png" />
      </SearchDiv>
      <RightIcons>
        <RightImg src="./media/house.png" />
        <RightIconsAFT>
          <RightImg src="./media/comments.png" />
        </RightIconsAFT>
        <RightIconsAFT>
          <RightImg src="./media/bell.png" />
        </RightIconsAFT>
      </RightIcons>
    </Wrapper2>
  );
};
