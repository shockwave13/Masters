import API from 'api';
import {
  SET_CALENDAR,
  SET_NEW_RECORDS,
  SET_SCHEDULE,
  SET_CLIENT_FIELD,
} from './types';

const setCalendarAction = (data: any) => ({
  type: SET_CALENDAR,
  payload: data,
});

const setNewRecords = (data: any[]) => ({
  type: SET_NEW_RECORDS,
  payload: data,
});

const setSchedule = (data: any[]) => ({
  type: SET_SCHEDULE,
  payload: data,
});

const setClientField = (field: string, value: any) => ({
  type: SET_CLIENT_FIELD,
  payload: {
    field,
    value,
  },
});

export const getCalendarNew = () => (dispatch: any) => {
  API.get('/specialist/records/get')
    .then((res) => {
      const {data} = res.data;
      dispatch(setNewRecords(data.services));
    })
    .catch((e) => {
      console.log(e);
    });
};

interface IServiceStatusData {
  data: {
    id: number;
    status: number;
  };
}

export const setServiceStatus = (data: IServiceStatusData) => (
  dispatch: any,
) => {
  API.post('/specialist/record/status', data)
    .then((res) => {
      const {success} = res.data;
      if (success) {
        dispatch(getCalendarNew());
      }
    })
    .catch((e) => console.log('Error', e));
};

export const getCalendarSchedule = () => (dispatch: any) => {
  API.get('/specialist/record/agree')
    .then((res) => {
      const {data} = res.data;
      dispatch(setSchedule(data.services));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getCalendarAll = () => (dispatch: any) => {
  API.get('/schedule/get')
    .then((res) => {
      const {data} = res.data;

      dispatch(
        setCalendarAction({
          week: JSON.parse(data.week),
          month: JSON.parse(data.month),
        }),
      );
    })
    .catch((e) => {
      console.log(e);
    });
};

export const setCalendar = (data) => (dispatch: any) => {
  API.post('/schedule/add', data)
    .then((res) => {
      console.log('Schedule', res);
    })
    .catch((e) => {
      console.log(e);
    });
};

// CLIENT API

export const getActiveRecords = () => (dispatch: any) => {
  API.get('/user/record/active/get')
    .then((res) => {
      const {data} = res.data;
      dispatch(setClientField('activeRecords', data));
    })
    .catch((e) => console.log('Error', e));
};

export const getArchiveRecords = () => (dispatch: any) => {
  API.get('/user/record/archive/get')
    .then((res) => {
      const {data} = res.data;
      dispatch(setClientField('archiveRecords', data));
    })
    .catch((e) => console.log('Error', e));
};
