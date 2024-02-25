export type UserType = {
  id: number;
  name: string;
  email: string;
  info: string;
  img: string;
  number: string | null;
  status: UserState;
  roleId: number;
  Kurator?: [] | null;
};


export type BackendAuth = { user: UserType; accessToken: string };

// Redux Slice State
export type AuthState = {
  user: UserType;
  accessToken: string;
};
export type UserState =
  | ({ status: 'authenticated' } & UserType)
  | ({ status: 'pending' } & UserType)
  | ({ status: 'guest' } & UserType);

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
  role: string;
};
export type UserEditForm = {
  email: string;
  name: string;
  info: string;
  img: string;
};
export type UsersState = {
  selectedUser: UserType | null;
};
