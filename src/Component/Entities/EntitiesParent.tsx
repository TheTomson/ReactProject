import React, { FC, useCallback, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styled from "styled-components";
import { EntitiesBlocks } from "./EntitiesBlocks";
import { FilterComponent } from "../common/Filter";

const Wrapper5 = styled.div`
  width: 77%;
  margin-left: 18%;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #edf2f7;
  position: relative;
  z-index: 3;
`;
const Navigation = styled.div`
  width: 77%;
  margin-left: 18%;
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #edf2f7;
  position: relative;
  z-index: 3;
`;
const SelectList = styled.select`
  position: relative;
  right: 25px;
`;
const Dots = styled.p`
  font-weight: bold;
  font-size: 28px;
  position: relative;
  right: 65px;
  bottom: 7px;
`;
const SortButton = styled.button``;
const FilterButton = styled.button``;
const FullScreenButton = styled.button``;
const ShareButton = styled.button``;
const Filter = styled.input``;
const FollowedList = styled.select``;
const MosaicView = styled.button``;
const ListView = styled.button``;
const sortClick = () => {
  let x = document.getElementsByClassName("sc-tAEdG eTMfpy").item;
  console.log(x);
  let arr = [];
  arr.push(x);
  arr.sort();
  console.log(arr);
};

export const EntitiesParent: FC = () => {
  const handleFS = useFullScreenHandle();
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const changeFullScreen = () => {
    setFullScreen(!fullScreen);
  };
  const [view, setView] = useState<boolean>(false);
  const viewMosaic = () => {
    setView(true);
  };
  const viewList = () => {
    setView(false);
  };
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <Wrapper5>
      <Navigation>
        <SelectList>
          <option>ALL</option>
        </SelectList>
        <Dots>...</Dots>
        <SortButton onClick={sortClick}>Sort</SortButton>
        <FilterButton onClick={() => setShowFilter(!showFilter)}>
          Filter
        </FilterButton>
        <FullScreenButton
          onClick={() => {
            handleFS.enter();
            changeFullScreen();
          }}
        >
          Fullscreen
        </FullScreenButton>

        <ShareButton
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Share
        </ShareButton>
        <Filter placeholder="Search..."></Filter>
        <FollowedList>
          <option>Followed</option>
          <option>Unfollowed</option>
        </FollowedList>
        <MosaicView onClick={viewMosaic}>Mosaic View</MosaicView>
        <ListView onClick={viewList}>List View</ListView>
      </Navigation>
      {showFilter && <FilterComponent />}
      <FullScreen handle={handleFS}>
        <EntitiesBlocks mosaic={view}></EntitiesBlocks>
      </FullScreen>
    </Wrapper5>
  );
};
