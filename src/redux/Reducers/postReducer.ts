import { ILatestPublicationPost } from "../../StyleHelpers/ApiInterfaces";
import * as actionTypes from "../Types/postTypes";

export interface IPostReducer {
  post: ILatestPublicationPost[];
}

const defaultState = (): IPostReducer => ({
  post: [],
});
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_POST: {
      const data: actionTypes.IPostType["FETCH_POST"] = action;
      return {
        ...state,
        post: data.post,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
