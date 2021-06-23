import { combineReducers } from "redux";

import users, { IUserReducer } from "../Reducers/userReducer";
import photo, { IPhotoReducer } from "../Reducers/photoReducer";
import post, { IPostReducer } from "../Reducers/postReducer";
import comments, { ICommentReducer } from "../Reducers/commentReducer";

export default combineReducers({
  users,
  photo,
  post,
  comments,
});

export interface IState {
  users: IUserReducer;
  user: IUserReducer;
  photo: IPhotoReducer;
  post: IPostReducer;
  comments: ICommentReducer;
  comment: ICommentReducer;
}
