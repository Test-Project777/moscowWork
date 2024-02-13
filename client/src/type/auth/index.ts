import type { RecomType } from '../recomedation';

export type UserType = {
  id: number;
  name: string;
  email: string;
  info: string;
  img: string;
  number: string | null;
  statusId: number | null;
  roleId: number;
  Kurator?: [] | null;
};

export type UserWithRec = UserType & { Comments: RecomType[] };

export type BackendAuth = { user: UserType; accessToken: string };


// Redux Slice State
export type AuthState = {
  user: any;
  accessToken: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = {
  email: string;
  name: string;
  password: string;
  mentorStatus: boolean;
  info: string;
  img: string;
  statusId: number | null;
};
export type UserEditForm = {
  email: string;
  name: string;
  info: string;
  img: string;
};
export type UsersState = {
  selectedUser: UserType | null;
  nastavnik: UserType | null;
  allUser: UserType[];
};
