export interface IError {
  message: string;
  errors: object | undefined;
}

export interface IErrorStore {
  isErrorVisible: boolean;
  error: IError;
}

export const SET_MESSAGE = '@error/set_error_message';
export const SET_VISIBLE = '@error/set_error_visible';
