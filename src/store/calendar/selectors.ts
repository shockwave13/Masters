import {createSelector} from 'reselect';
import {ICalendarStore, IClientCalendar} from './types';
import {IStore} from '../types';

export const getCalendarState = (state: IStore): ICalendarStore =>
  state.calendar;

export const selectMonth = createSelector(
  [getCalendarState],
  (calendarState) => calendarState.calendar.month,
);

export const selectWeek = createSelector(
  [getCalendarState],
  (calendarState) => calendarState.calendar.week,
);

export const selectNewRecords = createSelector(
  [getCalendarState],
  (calendarState) => calendarState.newRecords,
);

export const selectSchedule = createSelector(
  [getCalendarState],
  (calendarState) => calendarState.schedule,
);

export const getClientState = (state: IStore): IClientCalendar =>
  state.calendar.client;

export const selectClientActiveServices = createSelector(
  [getClientState],
  (calendarState) => calendarState.activeRecords.services,
);

export const selectClientActiveCourses = createSelector(
  [getClientState],
  (calendarState) => calendarState.activeRecords.courses,
);

export const selectClientArchiveServices = createSelector(
  [getClientState],
  (calendarState) => calendarState.archiveRecords.services,
);

export const selectClientArchiveCourses = createSelector(
  [getClientState],
  (calendarState) => calendarState.archiveRecords.courses,
);
