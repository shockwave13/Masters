export const SET_CALENDAR = '@calendar/set_calendar';
export const SET_NEW_RECORDS = '@calendar/set_new_records';
export const SET_SCHEDULE = '@calendar/set_schedule';
export const SET_CLIENT_FIELD = '@calendar/set_client_field';

export interface IClientCalendar {
  activeRecords: {
    services: any[];
    courses: any[];
  };
  archiveRecords: {
    services: any[];
    courses: any[];
  };
}
export interface ICalendarStore {
  calendar: {
    week: object;
    month: null;
  };
  newRecords: INewRecord[];
  schedule: any[];
  client: IClientCalendar;
}

interface ICategory {
  id: number;
  title: string;
  img: number;
  sub_category: number;
  slug: null;
  created_at: string;
  updated_at: string;
}
interface IService {
  id: number;
  data: null;
  description: string;
  prepare_time: null;
  category_id: number;
  specialist_id: number;
  created_at: string;
  updated_at: string;
  category: ICategory;
}
interface ISpecialistTime {
  id: number;
  price: number;
  sale_price: string;
  hours: string;
  minutes: string;
  service_id: number;
  created_at: string;
  updated_at: string;
  service: IService;
}

interface IAvatar {
  id: number;
  user_id: number;
  url: string;
  title: string;
  service_id: null;
  show: number;
  created_at: string;
  updated_at: string;
  course_id: null;
}
interface IUser {
  id: number;
  name: string;
  last_name: string;
  slug: null;
  email: string;
  phone: string;
  img: number;
  email_verified_at: null;
  schedule: string;
  notification: number;
  specialist_id: number;
  email_confirmed: number;
  phone_confirmed: number;
  isAdmin: number;
  locked: number;
  created_at: string;
  updated_at: string;
  chat_push: number;
  chat_sms: number;
  chat_email: number;
  record_push: number;
  record_sms: number;
  record_email: number;
  avatar: IAvatar;
}
export interface INewRecord {
  id: number;
  user_id: number;
  service_time_id: number;
  specialist_id: number;
  recorded: string;
  status: number;
  done: number;
  created_at: string;
  updated_at: string;
  specialist_time: ISpecialistTime;
  user: IUser;
}
