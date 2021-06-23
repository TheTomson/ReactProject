import { IPhoto } from "../../StyleHelpers/ApiInterfaces";

export const FETCH_PHOTO = "FETCH_PHOTO";

export interface IPhotoTypes {
  FETCH_PHOTO: {
    photo: IPhoto[];
  };
}
