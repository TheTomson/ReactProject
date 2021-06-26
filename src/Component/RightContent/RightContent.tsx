import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MultipleItems } from "../common/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../redux/Actions/photoActions";
import { fetchUsers } from "../../redux/Actions/userActions";
import { IPhotoReducer } from "../../redux/Reducers/photoReducer";
import { IState } from "../../redux/Reducers/rootReducer";
import { IUserReducer } from "../../redux/Reducers/userReducer";
import { fetchPosts } from "../../redux/Actions/postActions";
import { IPostReducer } from "../../redux/Reducers/postReducer";
import { fetchComments } from "../../redux/Actions/commentActions";
import { IComment } from "../../StyleHelpers/ApiInterfaces";
import { ICommentReducer } from "../../redux/Reducers/commentReducer";
import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { act } from "react-dom/test-utils";
import { ChangeEvent } from "react";
import { loggUserID } from "../../StyleHelpers/CurrentLogUser";

const Wrapper4 = styled.div`
  width: 77%;
  margin-left: 18%;
  margin-top: 7px;
  align-items: center;
  justify-content: space-around;
  background-color: #edf2f7;
  position: relative;
  border: 1px solid;
  z-index: 3;
`;
const PublicationsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  position: relative;
  left: 7%;
`;
const ImgAndText = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  right: 80px;
  top: 30px;
`;
const ImgPub = styled.img`
  height: 400px;
  width: 100%;
`;
const DateAndProfile = styled.p`
  position: relative;
  bottom: 147px;
  color: white;
  right: 39px;
`;
const TextPub = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  bottom: 180px;
  color: white;
  font-size: 20px;
`;
const LastestPublic = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  right: 90px;
  width: 72%;
  bottom: 30px;
  height: auto;
`;
const TextPubRight = styled.span`
  font-size: 35px;
  position: relative;
  right: 33.8%;
`;
const ImgLPub = styled.img`
  height: 50px;
  width: 50px;
`;
const TextLPub = styled.p`
  width: 55%;
  position: relative;
  left: 60px;
  bottom: 52px;
`;
const SeeMorePub = styled.p`
  color: blue;
  cursor: pointer;
  position: relative;
  right: 340px;
  bottom: 10px;
  font-weight: bold;
`;
const Workspace = styled.span`
  position: relative;
  margin-left: 20px;
  font-weight: bold;
  font-size: 25px;
  bottom: 55px;
`;
const SpanAndFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
const Resume = styled.span`
  position: relative;
  font-weight: bold;
  font-size: 25px;
  bottom: 12px;
  right: 172px;
`;
const FilterRight = styled.input`
  position: relative;
  width: 15%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 3px;
  bottom: 12px;
  left: 320px;
`;
const Followed = styled.select`
  position: relative;
  bottom: 12px;
  left: 160px;
`;
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
const TitlePosts = styled.span`
  position: relative;
  font-weight: bold;
  font-size: 20px;
  color: #6699ff;
`;
const ContentPosts = styled.p``;
const ProfilePosts = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;
const LeftIMGPublic = styled.img`
  height: 19px;
  width: 19px;
  border-radius: 50%;
`;
const ProfilePostsImg = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
const ProfilePostsName = styled.p`
  position: relative;
  font-weight: bold;
  font-size: 14px;
  left: 15px;
  top: 2px;
`;
const AuthorLPub = styled.p`
  position: relative;
  bottom: 42px;
`;
const LastestPublicSec = styled.div`
  position: relative;
  top: 15px;
`;
const ResumeYourWork = styled.div``;
const PagginationButtons = styled.div``;

type fetchUsers = ReturnType<typeof fetchUsers>;
type fetchPhoto = ReturnType<typeof fetchPhoto>;
type fetchPosts = ReturnType<typeof fetchPosts>;
type fetchComments = ReturnType<typeof fetchComments>;

export const RightContent: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<fetchUsers>(fetchUsers());
  }, []);
  useEffect(() => {
    dispatch<fetchPosts>(fetchPosts());
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
  const posts = useSelector<IState, IPostReducer>((state) => ({
    ...state.post,
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

  const post = posts.post[1];
  const postUserID = post?.userId;
  const user = users.users[postUserID - 1];
  const userid = user?.id;
  const photo = photos.photo[userid - 1];
  const lastpub = posts.post.slice(1, 4);

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
    <Wrapper4>
      <PublicationsRight>
        <ImgAndText>
          <ImgPub src="./media/publicationright.jpg"></ImgPub>
          <TextPub>{post?.body}</TextPub>
          <DateAndProfile>
            7 jan.2020 <LeftIMGPublic src={photo?.url}></LeftIMGPublic>
            {user?.name}
          </DateAndProfile>
        </ImgAndText>
        <LastestPublic>
          <TextPubRight>Lastest publications</TextPubRight>
          {lastpub.map((e) => (
            <LastestPublicSec>
              <ImgLPub src={photos.photo[e.id - 1]?.url}></ImgLPub>
              <TextLPub>{e.body}</TextLPub>
              <AuthorLPub>
                4 October 2020 {users.users[e.userId - 1]?.name}
              </AuthorLPub>
            </LastestPublicSec>
          ))}
          <Link to="/test">
            {" "}
            <SeeMorePub>See more publications here!</SeeMorePub>
          </Link>
        </LastestPublic>
      </PublicationsRight>
      <Workspace>Workspaces</Workspace>
      <MultipleItems></MultipleItems>
      <SpanAndFilter>
        <Resume>Resume your work</Resume>
        <FilterRight
          placeholder="Filter by Title"
          value={inputText}
          onChange={inputHandler}
        ></FilterRight>
        <Followed value={follow} onChange={changeHandler}>
          <option value="unfollowed">Unfollowed</option>
          <option value="followed">Followed</option>
        </Followed>
      </SpanAndFilter>
      <ResumeYourWork>
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
      </ResumeYourWork>
      <PagginationButtons className={classes.root}>
        <Pagination
          count={40}
          color="primary"
          page={activePage}
          onChange={handleChangePage}
        />
      </PagginationButtons>
    </Wrapper4>
  );
};
