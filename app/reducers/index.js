import { combineReducers } from 'redux';
import { dateSchedules } from './DateScheduleReducers';
import { weekSchedules } from './WeekScheduleReducers';
import { config } from './ConfigReducers';

const rootReducer = combineReducers({
  dateSchedules: dateSchedules,
  weekSchedules: weekSchedules,
  config: config
});

export default rootReducer;