import { IComment } from "../../StyleHelpers/ApiInterfaces";
import * as actionTypes from "../Types/commentTypes";

export interface ICommentReducer {
  comments: IComment[];
}

const defaultState = (): ICommentReducer => ({
  comments: [],
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_COMMENTS: {
      const data: actionTypes.ICommentTypes["FETCH_COMMENTS"] = action;
      return {
        ...state,
        comments: data.comments,
      };
    }
    case actionTypes.FETCH_COMMENT: {
      const data: actionTypes.ICommentTypes["FETCH_COMMENT"] = action;
      return {
        ...state,
        comment: data.comment,
      };
    }
    default:
      return state;
  }
};
