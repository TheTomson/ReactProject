import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchComments } from "../redux/Actions/commentActions";
import { fetchPhoto } from "../redux/Actions/photoActions";
import { fetchUsers } from "../redux/Actions/userActions";
import { ICommentReducer } from "../redux/Reducers/commentReducer";
import { IPhotoReducer } from "../redux/Reducers/photoReducer";
import { IState } from "../redux/Reducers/rootReducer";
import { IUserReducer } from "../redux/Reducers/userReducer";
import { loggUserID } from "../StyleHelpers/CurrentLogUser";

const Wrapper3 = styled.div`
  width: 83%;
  margin-left: 18%;
  margin-top: 7px;
  align-items: center;
  justify-content: space-around;
  background-color: #edf2f7;
  position: relative;
  border: 1px solid;
  z-index: 3;
`;
const LogoIMG = styled.img`
  height: 300px;
  width: 1311px;
`;
const TitleDiv = styled.div``;
const Title = styled.span`
  font-weight: bold;
  font-size: 25px;
`;
const TitleIMG = styled.img``;
const TitleContent = styled.p``;
const StartWorking = styled.div``;
const StartWorkingText = styled.p`
  font-weight: bold;
  font-size: 18px;
`;
const Blocks = styled.div`
  display: flex;
  flex-direction: row;
`;
const StartWorkingBlocks = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  background-color: white;
`;
const StartWorkingBlocksTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
`;
const StartWorkingBlocksContent = styled.p``;
const LastUpdates = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const LastUpdatesTitle = styled.span`
  font-weight: bold;
  font-size: 25px;
`;
const LastUpdatesFilter = styled.input`
  margin-left: 860px;
`;
const LastUpdatesSelect = styled.select``;
const Panels = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const AllButton = styled.button`
  background-color: #ccccff;
`;
const SASButton = styled.button`
  background-color: #66ff66;
`;
const SARLButton = styled.button`
  background-color: #66ffff;
`;
const SBButton = styled.button`
  background-color: #ffd54f;
`;
const CommunitiesButton = styled.button`
  background-color: #757575;
`;
const POAButton = styled.button`
  background-color: #ccccff;
`;
const SurveylButton = styled.button`
  background-color: #b0bec5;
`;
const LastButton = styled.button`
  background-color: #ffffff;
`;
const PostsDiv = styled.div``;
const RightPosts = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 97%;
  margin-left: 15px;
  margin-bottom: 8px;
`;
const TitlePosts = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #6699ff;
`;
const ContentPosts = styled.p``;
const ProfilePosts = styled.div``;
const ProfilePostsName = styled.p`
  position: relative;
  font-weight: bold;
  font-size: 14px;
`;
const ProfilePostsImg = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
const PagginationButtons = styled.div``;

type fetchUsers = ReturnType<typeof fetchUsers>;
type fetchPhoto = ReturnType<typeof fetchPhoto>;
type fetchComments = ReturnType<typeof fetchComments>;

export const Workspace: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<fetchUsers>(fetchUsers());
  }, []);
  useEffect(() => {
    dispatch<fetchPhoto>(fetchPhoto());
  }, []);
  useEffect(() => {
    dispatch<fetchComments>(fetchComments());
  }, []);
  const users = useSelector<IState, IUserReducer>((state) => ({
    ...state.users,
  }));
  const photos = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photo,
  }));
  const comments = useSelector<IState, ICommentReducer>((state) => ({
    ...state.comments,
  }));
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(50),
      },
    },
  }));

  const classes = useStyles();
  const commentsPerPage = 10;
  const [activePage, setCurrentPage] = useState(1);
  const indexOfLastComment = activePage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  let resumeComments = comments.comments;
  const handleChangePage = (event: any, newPage: any) => {
    setCurrentPage(newPage);
  };

  const [inputText, setInputText] = useState<string>("");
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  };
  if (inputText != "") {
    resumeComments = resumeComments.filter((comment) =>
      comment.name.includes(inputText.toLowerCase())
    );
  }

  const [follow, setFollow] = useState<string>("unfollowed");
  const changeHandler = (el: any) => {
    const text = el.target.value;
    setFollow(text);
  };

  if (follow != "unfollowed") {
    resumeComments = resumeComments.filter((el) => el.postId == loggUserID);
  }

  return (
    <Wrapper3>
      <LogoIMG src="../Media/broom.jpg"></LogoIMG>
      <TitleDiv>
        <TitleIMG src="../Media/entities.png"></TitleIMG>
        <Title>Corporate holdings</Title>
        <TitleContent>
          Workspace purpose and a bit of context. This much needed description
          is here to remind people where they are, if they are new or have poor
          memory
        </TitleContent>
      </TitleDiv>
      <StartWorking>
        <StartWorkingText>Start working on corporate matters</StartWorkingText>
        <Blocks>
          <StartWorkingBlocks>
            <StartWorkingBlocksTitle>
              Explore your entities
            </StartWorkingBlocksTitle>
            <StartWorkingBlocksContent>
              Take a few minutes to look at the most important elements and
              specificities of your entities
            </StartWorkingBlocksContent>
          </StartWorkingBlocks>
          <StartWorkingBlocks>
            <StartWorkingBlocksTitle>
              Structure the ownership
            </StartWorkingBlocksTitle>
            <StartWorkingBlocksContent>
              Get a clear view of the ownership by looking at the relations
              between inviduals and entities.
            </StartWorkingBlocksContent>
          </StartWorkingBlocks>
          <StartWorkingBlocks>
            <StartWorkingBlocksTitle>
              Define the calendar
            </StartWorkingBlocksTitle>
            <StartWorkingBlocksContent>
              Prepare future events by creating detailed plans arround the life
              of you entity
            </StartWorkingBlocksContent>
          </StartWorkingBlocks>
        </Blocks>
      </StartWorking>
      <LastUpdates>
        <LastUpdatesTitle>Latest updates</LastUpdatesTitle>
        <LastUpdatesFilter
          placeholder="Filter by title.."
          value={inputText}
          onChange={inputHandler}
        ></LastUpdatesFilter>
        <LastUpdatesSelect value={follow} onChange={changeHandler}>
          <option value="unfollowed">Unfollowed</option>
          <option value="followed">Followed</option>
        </LastUpdatesSelect>
      </LastUpdates>
      <Panels>
        <AllButton>ALL</AllButton>
        <SASButton>SAS</SASButton>
        <SARLButton>SARL</SARLButton>
        <SBButton>Secondary Business</SBButton>
        <CommunitiesButton>Communities</CommunitiesButton>
        <POAButton>POA</POAButton>
        <SurveylButton>Survey</SurveylButton>
        <LastButton>...</LastButton>
      </Panels>
      <PostsDiv>
        {resumeComments
          .slice(indexOfFirstComment, indexOfLastComment)
          .map((e) => (
            <RightPosts>
              <TitlePosts>{e.name}</TitlePosts>
              <ContentPosts>{e.body}</ContentPosts>
              <ProfilePosts>
                <ProfilePostsName>
                  Updated 3 days ago by{" "}
                  <ProfilePostsImg
                    src={photos.photo[e.id - 1]?.url}
                  ></ProfilePostsImg>
                  {users.users[Math.floor(Math.random() * 10)]?.name}
                </ProfilePostsName>
              </ProfilePosts>
            </RightPosts>
          ))}
      </PostsDiv>
      <PagginationButtons className={classes.root}>
        <Pagination
          count={40}
          color="primary"
          page={activePage}
          onChange={handleChangePage}
        />
      </PagginationButtons>
    </Wrapper3>
  );
};
