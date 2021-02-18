import {IAction} from 'store/types';
import {
  SET_CALENDAR,
  SET_CLIENT_FIELD,
  SET_NEW_RECORDS,
  SET_SCHEDULE,
} from './types';

const initState = {
  calendar: {
    week: {},
  },
  newRecords: [],
  schedule: [],

  client: {
    activeRecords: {},
    archiveRecords: {},
  },
};

const calendarReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case SET_CALENDAR: {
      const {payload} = action;
      return {
        ...state,
        calendar: payload,
      };
    }
    case SET_NEW_RECORDS: {
      const {payload} = action;
      return {
        ...state,
        newRecords: payload,
      };
    }
    case SET_SCHEDULE: {
      const {payload} = action;
      return {
        ...state,
        schedule: payload,
      };
    }
    case SET_CLIENT_FIELD: {
      const {field, value} = action.payload;
      return {
        ...state,
        client: {
          ...state.client,
          [field]: value,
        },
      };
    }
    default:
      return state;
  }
};

export default calendarReducer;
