import { combineReducers } from 'redux';
import { dateSchedules } from './DateScheduleReducers';
import { weekSchedules } from './WeekScheduleReducers';

const rootReducer = combineReducers({
  dateSchedules: dateSchedules,
  weekSchedules: weekSchedules
});

export default rootReducer;