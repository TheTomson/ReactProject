import { Dispatch } from "redux";
import * as actionTypes from "../Types/userTypes";
import { IUser } from "../../StyleHelpers/ApiInterfaces";

export const fetchUsers = (): Promise<IUser[]> =>
  ((dispatch: Dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users: IUser[]) => {
        dispatch({
          type: actionTypes.FETCH_USERS,
          users,
        });
      });
  }) as any;
export const fetchUser = (id: string): Promise<IUser> =>
  ((dispatch: Dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user: IUser) => {
        dispatch({
          type: actionTypes.FETCH_USER,
          user,
        });
      });
  }) as any;
//Math.floor(Math.random() * data.length)
