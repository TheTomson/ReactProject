import React, { FC } from "react";
import styled from "styled-components";

const WrapperFilter = styled.div`
display:flex
align-items:center;
height:170px;
width:auto;
border:1px solid;
border-radius:2%;
`;
const FilterSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
const FristRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 13px;
`;
const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 13px;
`;
const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 13px;
`;
const FourthRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const FirstWhere = styled.div`
  display: flex;
  flex-direction: row;
`;
const SecondWhere = styled.div`
  display: flex;
  flex-direction: row;
`;
const WhereIMG = styled.img`
  height: 15px;
  width: 15px;
  margin-left: 10px;
`;
const WhereContent = styled.p`
  margin-left: 4px;
`;
const FirstAnd = styled.div`
  display: flex;
  flex-direction: row;
`;
const AndIMG = styled.img`
  height: 15px;
  width: 15px;
  margin-left: 10px;
`;
const AndContent = styled.p`
  margin-left: 4px;
`;
const FirstSelectedList = styled.select`
  margin-left: 2px;
`;
const SecondSelectedList = styled.select`
  margin-left: 2px;
`;
const ThirdSelectedList = styled.select`
  margin-left: 2px;
`;
const FourthSelectedList = styled.select`
  margin-left: 2px;
`;
const FifthSelectedList = styled.select`
  margin-left: 2px;
`;
const SixthSelectedList = styled.select`
  margin-left: 2px;
`;
const SeventhSelectedList = styled.select`
  margin-left: 2px;
`;
const EighthSelectedList = styled.select`
  margin-left: 2px;
`;
const NinthSelectedList = styled.select`
  margin-left: 10px;
  margin-top: 12px;
  color: blue;
  border: 0px;
`;
const InputInFristRow = styled.input`
  margin-left: 2px;
`;
const InputInSecondRow = styled.input`
  margin-left: 2px;
`;
const InputInSecondRowSec = styled.input`
  margin-left: 2px;
`;
const InputInThirdRow = styled.input`
  margin-left: 2px;
`;
const InputInThirdRowSec = styled.input`
  margin-left: 2px;
`;
const AddFilterIMG = styled.img`
  height: 15px;
  width: 15px;
  margin-left: 10px;
  margin-top: 13px;
  cursor: pointer;
`;
const AddFilterContent = styled.p`
  margin-left: 10px;
  margin-top: 13px;
  color: blue;
  cursor: pointer;
`;

export const FilterComponent: FC = () => {
  return (
    <WrapperFilter>
      <FilterSpan>
        Rows are filtered by the following conditions starting from the top
      </FilterSpan>
      <FristRow>
        <FirstWhere>
          <WhereIMG src="../Media/remove.svg"></WhereIMG>
          <WhereContent>Where</WhereContent>
        </FirstWhere>
        <FirstSelectedList>
          <option>Company</option>
        </FirstSelectedList>
        <SecondSelectedList>
          <option>Contains</option>{" "}
        </SecondSelectedList>
        <InputInFristRow placeholder="Type.." disabled></InputInFristRow>
      </FristRow>
      <SecondRow>
        <SecondWhere>
          <WhereIMG src="../Media/remove.svg"></WhereIMG>
          <WhereContent>Where</WhereContent>
        </SecondWhere>
        <ThirdSelectedList>
          <option>Status</option>
        </ThirdSelectedList>
        <FourthSelectedList>
          <option>Is</option>
        </FourthSelectedList>
        <InputInSecondRow placeholder="Type.." disabled></InputInSecondRow>
        <FifthSelectedList>
          <option>In</option>
        </FifthSelectedList>
        <InputInSecondRowSec
          placeholder="Entity.."
          disabled
        ></InputInSecondRowSec>
      </SecondRow>
      <ThirdRow>
        <FirstAnd>
          <AndIMG src="../Media/remove.svg"></AndIMG>
          <AndContent>And</AndContent>
        </FirstAnd>
        <SixthSelectedList>
          <option>Status</option>
        </SixthSelectedList>
        <SeventhSelectedList>
          <option>Ends before</option>
        </SeventhSelectedList>
        <InputInThirdRow placeholder="Date.." disabled></InputInThirdRow>
        <EighthSelectedList>
          <option>In</option>
        </EighthSelectedList>
        <InputInThirdRowSec
          placeholder="Entity.."
          disabled
        ></InputInThirdRowSec>
      </ThirdRow>
      <FourthRow>
        <AddFilterIMG src="../Media/add.svg"></AddFilterIMG>
        <AddFilterContent>Add Filter</AddFilterContent>
        <NinthSelectedList>
          <option>choose property</option>
        </NinthSelectedList>
      </FourthRow>
    </WrapperFilter>
  );
};
