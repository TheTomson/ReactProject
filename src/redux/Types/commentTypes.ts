import { IComment } from "../../StyleHelpers/ApiInterfaces";

export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENT = "FETCH_COMMENT";

export interface ICommentTypes {
  FETCH_COMMENTS: {
    comments: IComment[];
  };
  FETCH_COMMENT: {
    comment: IComment;
  };
}
