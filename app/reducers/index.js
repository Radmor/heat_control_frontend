import { combineReducers } from 'redux';
import { dateSchedules } from './DateScheduleReducers';

const rootReducer = combineReducers({
  dateSchedules: dateSchedules
});

export default rootReducer;