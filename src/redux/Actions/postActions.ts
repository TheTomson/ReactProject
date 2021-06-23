import { Dispatch } from "redux";
import * as actionTypes from "../Types/postTypes";
import { ILatestPublicationPost } from "../../StyleHelpers/ApiInterfaces";

export const fetchPosts = (): Promise<ILatestPublicationPost[]> =>
  ((dispatch: Dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((post: ILatestPublicationPost[]) => {
        dispatch({
          type: actionTypes.FETCH_POST,
          post,
        });
      });
  }) as any;
