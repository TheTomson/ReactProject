import { IPhoto } from "../../StyleHelpers/ApiInterfaces";
import * as actionTypes from "../Types/photoTypes";

export interface IPhotoReducer {
  photo: IPhoto[];
}

const defaultState = (): IPhotoReducer => ({
  photo: [],
});
export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_PHOTO: {
      const data: actionTypes.IPhotoTypes["FETCH_PHOTO"] = action;
      return {
        ...state,
        photo: data.photo,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
