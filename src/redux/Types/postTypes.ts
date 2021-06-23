import { ILatestPublicationPost } from "../../StyleHelpers/ApiInterfaces";

export const FETCH_POST = "FETCH_POST";

export interface IPostType {
  FETCH_POST: {
    post: ILatestPublicationPost[];
  };
}
