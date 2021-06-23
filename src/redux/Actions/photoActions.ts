import { Dispatch } from "redux";
import * as actionTypes from "../Types/photoTypes";
import { IPhoto } from "../../StyleHelpers/ApiInterfaces";

export const fetchPhoto = (): Promise<IPhoto[]> =>
  ((dispatch: Dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((photo: IPhoto[]) => {
        dispatch({
          type: actionTypes.FETCH_PHOTO,
          photo,
        });
      });
  }) as any;
