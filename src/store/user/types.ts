export interface IGeolocation {
  lat: number;
  lng: number;
}

export interface IUserStore {
  user: any;
}
export interface ISpecialist {
  address: string;
  at_home: number;
  city: string;
  company_name: string;
  country: string;
  category_id: Number[];
  geo: IGeolocation;
  on_depature: number;
  radius: number;
  region: string;
  show_full: number;
  street: string;
  user_id: number;
}

export interface IUser {
  id: number;
  name: string;
  last_name: string;
  slug: null;
  email: string | null;
  phone: string | null;
  img: null;
  email_verified_at: null;
  schedule: string;
  notification: number;
  specialist_id: null;
  email_confirmed: number;
  phone_confirmed: number;
  isAdmin: number;
  locked: number;
  created_at: '2number2number-12-10T21:21:20.000000Z';
  updated_at: '2020-12-10T21:21:20.000000Z';
  chat_push: number;
  chat_sms: number;
  chat_email: number;
  record_push: number;
  record_sms: number;
  record_email: number;
  active_records: any[];
  archive_records: any[];
  pending_records: any[];
  photos_: any[];
  specialist: null;
  avatar: null;
}

export const SET_USER = '@user/set_user';
