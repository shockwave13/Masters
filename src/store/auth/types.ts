export const SET_TOKEN = '@auth/set_user_token';
export const SET_AUTH = '@auth/set_is_auth';
export const SET_VALUE = '@auth/set_value';
export const SET_IS_MASTER = '@auth/set_is_master';

export interface ICreateMaster {
  address: string;
  at_home: number;
  city: string;
  company_name: string;
  country: string;
  category_id: number[];
  geo: {lat: number; lng: number};
  on_depature: number;
  radius: number;
  region: string;
  show_full: number;
  street: string;
  user_id: number;
}

export interface IAuthStore {
  isAuth: boolean;
  token: string;
  refreshToken: string;
  isMaster: number;
  createMasterState: ICreateMaster;
}
export interface IUser {
  email?: string | null;
  phone?: string | null;
  password?: string;
  last_name?: string;
  name?: string;
}

export interface ICreateMasterData {
  address: string;
  at_home: number;
  city: string;
  company_name: string;
  country: string;
  category_id: string;
  geo: string;
  on_depature: number;
  radius: number;
  region: string;
  show_full: number;
  street: string;
  user_id: 0;
}
