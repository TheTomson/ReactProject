import React, { FC } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkspaceDiv = styled.div`
  height: 200px;
`;
const WorkSpaceDivOne = styled.div`
  border: 0.5px solid;
  border-radius: 5px;
  background-color: white;
`;
const WorkImg = styled.img`
  height: 120px;
  width: 100%;
`;
const WorkImg2 = styled.img`
  height: 45px;
  position: relative;
  left: 20px;
  bottom: 25px;
`;
const WorkText = styled.p`
  position: relative;
  left: 85px;
  bottom: 45px;
  font-weight: bold;
  font-size: 18px;
`;

export class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <WorkspaceDiv>
        <Slider {...settings}>
          <WorkSpaceDivOne>
            <WorkImg src="./media/podpis2.jpeg"></WorkImg>
            <WorkImg2 src="./media/settings.png"></WorkImg2>
            <WorkText>Client Contract</WorkText>
          </WorkSpaceDivOne>
          <WorkSpaceDivOne>
            <WorkImg src="./media/podpis2.jpeg"></WorkImg>
            <WorkImg2 src="./media/settings.png"></WorkImg2>
            <WorkText>Supplier Contract</WorkText>
          </WorkSpaceDivOne>
          <WorkSpaceDivOne>
            <WorkImg src="./media/podpis2.jpeg"></WorkImg>
            <WorkImg2 src="./media/settings.png"></WorkImg2>
            <WorkText>Corporate</WorkText>
          </WorkSpaceDivOne>
          <WorkSpaceDivOne>
            <WorkImg src="./media/podpis2.jpeg"></WorkImg>
            <WorkImg2 src="./media/settings.png"></WorkImg2>
            <WorkText>Group Norms</WorkText>
          </WorkSpaceDivOne>
          <WorkSpaceDivOne>
            <WorkImg src="./media/podpis2.jpeg"></WorkImg>
            <WorkImg2 src="./media/settings.png"></WorkImg2>
            <WorkText>Real Estate Contract</WorkText>
          </WorkSpaceDivOne>
        </Slider>
      </WorkspaceDiv>
    );
  }
}

// const WorkspaceDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   flex-direction: row;
// `;
// const WorkSpaceDivOne = styled.div`
//   border: 0.5px solid;
//   border-radius: 5px;
//   position: relative;
//   background-color: white;
//   width: 270px;
//   margin-right: 25px;
//   bottom: 30px;
// `;
// const WorkImg = styled.img`
//   height: 80px;
//   width: 100%;
// `;
// const WorkImg2 = styled.img`
//   height: 35px;
//   position: relative;
//   left: 20px;
//   bottom: 15px;
// `;
// const WorkText = styled.p`
//   position: relative;
//   left: 85px;
//   bottom: 40px;
//   font-weight: bold;
//   font-size: 18px;
// `;
