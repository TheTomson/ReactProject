export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  photo?: IPhoto;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
export interface ILatestPublicationPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IFakeCompany {
  id: number;
  name: string;
  address: string;
  photo_url: string;
  userID: number;
}
export interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
