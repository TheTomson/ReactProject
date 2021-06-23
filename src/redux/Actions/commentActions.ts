import { Dispatch } from "redux";
import * as actionTypes from "../Types/commentTypes";
import { IComment } from "../../StyleHelpers/ApiInterfaces";

export const fetchComments = (): Promise<IComment[]> =>
  ((dispatch: Dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments: IComment[]) => {
        dispatch({
          type: actionTypes.FETCH_COMMENTS,
          comments,
        });
      });
  }) as any;

export const fetchComment = (id: string): Promise<IComment> =>
  ((dispatch: Dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => response.json())
      .then((comment: IComment) => {
        dispatch({
          type: actionTypes.FETCH_COMMENT,
          comment,
        });
      });
  }) as any;
