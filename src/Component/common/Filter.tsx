import React, { FC } from "react";
import styled from "styled-components";

const WrapperFilter = styled.div``;
const FilterSpan = styled.span``;
const FristRow = styled.div``;
const SecondRow = styled.div``;
const ThirdRow = styled.div``;
const FourthRow = styled.div``;
const FirstWhere = styled.div``;
const SecondWhere = styled.div``;
const WhereIMG = styled.img``;
const WhereContent = styled.p``;
const FirstAnd = styled.div``;
const AndIMG = styled.img``;
const AndContent = styled.p``;
const FirstSelectedList = styled.select``;
const SecondSelectedList = styled.select``;
const ThirdSelectedList = styled.select``;
const FourthSelectedList = styled.select``;
const FifthSelectedList = styled.select``;
const SixthSelectedList = styled.select``;
const SeventhSelectedList = styled.select``;
const EighthSelectedList = styled.select``;
const NinthSelectedList = styled.select``;
const InputInFristRow = styled.input``;
const InputInSecondRow = styled.input``;
const InputInSecondRowSec = styled.input``;
const InputInThirdRow = styled.input``;
const InputInThirdRowSec = styled.input``;
const AddFilterIMG = styled.img``;
const AddFilterContent = styled.p``;

export const FilterComponent: FC = () => {
  return (
    <WrapperFilter>
      <FilterSpan>
        Rows are filtered by the following conditions starting from the top
      </FilterSpan>
      <FristRow>
        <FirstWhere>
          <WhereIMG></WhereIMG>
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
          <WhereIMG></WhereIMG>
          <WhereContent>Where</WhereContent>
        </SecondWhere>
        <ThirdSelectedList>Status</ThirdSelectedList>
        <FourthSelectedList>Is</FourthSelectedList>
        <InputInSecondRow placeholder="Type.." disabled></InputInSecondRow>
        <FifthSelectedList>In</FifthSelectedList>
        <InputInSecondRowSec
          placeholder="Entity.."
          disabled
        ></InputInSecondRowSec>
      </SecondRow>
      <ThirdRow>
        <FirstAnd>
          <AndIMG></AndIMG>
          <AndContent>And</AndContent>
        </FirstAnd>
        <SixthSelectedList>Status</SixthSelectedList>
        <SeventhSelectedList>Ends before</SeventhSelectedList>
        <InputInThirdRow placeholder="Date.." disabled></InputInThirdRow>
        <EighthSelectedList>In</EighthSelectedList>
        <InputInThirdRowSec
          placeholder="Entity.."
          disabled
        ></InputInThirdRowSec>
      </ThirdRow>
      <FourthRow>
        <AddFilterIMG></AddFilterIMG>
        <AddFilterContent>Add Filter</AddFilterContent>
        <NinthSelectedList>Choose property</NinthSelectedList>
      </FourthRow>
    </WrapperFilter>
  );
};
