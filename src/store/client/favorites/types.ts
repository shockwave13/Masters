export const SET_FAVORITES = '@app/set_favorites';

export interface IFavoriteStore {
  favorites: ISpecialist[];
}

export interface ISpecialist {
  id: number;
  user_id: number;
  specialist_id: number;
  created_at: string;
  updated_at: string;
  specialist: {
    id: number;
    place_id: number;
    address: string;
    street: string;
    region: string;
    city: string;
    appartment: string;
    show_full: number;
    at_home: number;
    on_depature: number;
    radius: string;
    company_name: string;
    country: string;
    photo: any;
    short_description: any;
    description: any;
    rating: number;
    likes: number;
    geo: any;
    feedback: number;
    best: number;
    is_work: number;
    premium: number;
    premium_duration: any;
    price: number;
    created_at: string;
    updated_at: string;
    user: {
      id: number;
      name: string;
      last_name: string;
      slug: any;
      email: any;
      phone: string;
      img: any;
      email_verified_at: any;
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
      photos: any[];
    };
    img: any;
  };
}
