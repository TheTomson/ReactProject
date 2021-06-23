import { IUser } from "../../StyleHelpers/ApiInterfaces";
import * as actionTypes from "../Types/userTypes";

export interface IUserReducer {
  users: IUser[];
  user: IUser;
}

const defaultState = (): IUserReducer => ({
  users: [],
  user: {
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  },
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS: {
      const data: actionTypes.IUserTypes["FETCH_USERS"] = action;
      return {
        ...state,
        users: data.users,
      };
    }
    case actionTypes.FETCH_USER: {
      const data: actionTypes.IUserTypes["FETCH_USER"] = action;
      return {
        ...state,
        user: data.user,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
