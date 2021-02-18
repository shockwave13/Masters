import {IAction} from 'store/types';
import {SET_MESSAGE, SET_VISIBLE, IErrorStore} from './types';

const initState = {
  isErrorVisible: false,
  error: {
    message: '',
    errors: undefined,
  },
};

const errorReducer = (state = initState, action: IAction): IErrorStore => {
  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...state,
        error: {
          ...action.payload,
        },
      };
    }
    case SET_VISIBLE: {
      return {
        ...state,
        isErrorVisible: !state.isErrorVisible,
      };
    }
    default:
      return state;
  }
};

export default errorReducer;
