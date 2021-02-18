export const SET_SERVICES = '@client/services/set_services';
export const SET_SPECIALIST_SERVICES =
  '@client/services/set_specialist_services';

export interface IServicesStore {
  services: any[];
  specialistsServices: any[];
}
