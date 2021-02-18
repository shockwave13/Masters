import {IAppStore} from './app/types';
import {IAuthStore} from './auth/types';
import {ICatalogStore} from './catalogs/types';
import {IUserStore} from './user/types';
import {IErrorStore} from './error/types';
import {ICalendarStore} from './calendar/types';
import {IFavoriteStore} from './client/favorites/types';
import {IServicesStore} from './client/services/types';

export interface IAction {
  type: string;
  payload: any;
}

export interface IStore {
  app: IAppStore;
  auth: IAuthStore;
  catalogs: ICatalogStore;
  error: IErrorStore;
  user: IUserStore;
  calendar: ICalendarStore;
  favorites: IFavoriteStore;
  services: IServicesStore;
}

export interface IRequestResponse {
  success: boolean;
  data: any[];
  message: string;
}
