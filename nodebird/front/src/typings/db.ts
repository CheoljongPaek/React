import * as H from "history";
// import { RouteComponentProps } from 'react-router-dom';


export interface imageProps {
  width: number
  height: number
};

export interface HomeProps {
  location: H.Location
  imageDetails: imageProps,
  image?: string
}
// export interface RouteComponentProps<P> {
//   match: match<P>;
//   location: H.Location;
//   history: H.History;
//   staticContext?: any;
// }

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
export interface urlHistory<P> {
  match: match<P>;
  location: H.Location
}
/* example
export interface IUser {
  id: number;
  nickname: string;
  email: string;
  Workspaces: IWorkspace[];
}

export interface IUserWithOnline extends IUser {
  online: boolean;
}

export interface IWorkspace {
  id: number;
  name: string;
  url: string; // 주소 창에 보이는 주소
  OwnerId: number; // 워크스페이스 만든 사람 아이디
}
*/