import React, { FC, useCallback, useEffect, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styled from "styled-components";
import { EntitiesBlocks } from "./EntitiesBlocks";
import { FilterComponent } from "../common/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/Actions/postActions";
import { IPostReducer } from "../../redux/Reducers/postReducer";
import { IState } from "../../redux/Reducers/rootReducer";
import { loggUserID } from "../../StyleHelpers/CurrentLogUser";
import { ChangeEvent } from "react";

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

type fetchPosts = ReturnType<typeof fetchPosts>;
export const EntitiesParent: FC = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<fetchPosts>(fetchPosts());
  }, []);
  const posts = useSelector<IState, IPostReducer>((state) => ({
    ...state.post,
  }));
  let post = posts.post;
  const handleFS = useFullScreenHandle();
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const changeFullScreen = () => {
    setFullScreen(!fullScreen);
  };
  const [view, setView] = useState<boolean>(true);
  const viewMosaic = () => {
    setView(true);
  };
  const viewList = () => {
    setView(false);
  };
  const [sortBtn, setSortBtn] = useState<boolean>(true);
  const sortHandler = () => {
    setSortBtn(!sortBtn);
    post.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  };
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };

  if (inputText != "") {
    post = post.filter((post) => post.title.includes(inputText.toLowerCase()));
  }
  const [follow, setFollow] = useState<string>("Unfollowed");
  const changeHandler = (el: any) => {
    const text = el.target.value;
    setFollow(text);
  };
  let postLength = 32;
  if (follow != "Unfollowed") {
    post = post.filter((el) => el.userId == loggUserID);
    postLength = post.length;
  }
  return (
    <Wrapper5>
      <Navigation>
        <SelectList>
          <option>ALL</option>
        </SelectList>
        <Dots>...</Dots>
        <SortButton onClick={sortHandler}>Sort</SortButton>
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
        <Filter
          placeholder="Search..."
          value={inputText}
          onChange={inputHandler}
        ></Filter>
        <FollowedList value={follow} onChange={changeHandler}>
          <option value="Unfollowed">Unfollowed</option>
          <option value="Followed">Followed</option>
        </FollowedList>
        <MosaicView onClick={viewMosaic}>Mosaic View</MosaicView>
        <ListView onClick={viewList}>List View</ListView>
      </Navigation>
      {showFilter && <FilterComponent />}
      {sortBtn}
      <FullScreen handle={handleFS}>
        <EntitiesBlocks
          mosaic={view}
          selectList={postLength}
          sortAndFilter={post}
        ></EntitiesBlocks>
      </FullScreen>
    </Wrapper5>
  );
};
