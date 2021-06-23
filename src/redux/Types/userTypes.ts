import { IUser } from "../../StyleHelpers/ApiInterfaces";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USER = "FETCH_USER";

export interface IUserTypes {
  FETCH_USERS: {
    users: IUser[];
  };
  FETCH_USER: {
    user: IUser;
  };
}
