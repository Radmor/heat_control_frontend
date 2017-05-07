import { DATESCHEDULE_GET, DATESCHEDULE_POST, DATESCHEDULE_PUT, DATESCHEDULE_DELETE, DATESCHEDULE_RECEIVE, DATESCHEDULES_RECEIVE } from '../constants/DateScheduleConstants';

export function updateDateSchedule(dateScheduleItem){
  return {
    type: DATESCHEDULE_PUT,
    dateScheduleItem: dateScheduleItem
  }
}

export function requestDateSchedules() {
  return {
    type: DATESCHEDULE_GET
  }
}

export function receiveDateSchedule(dateSchedules) {
  return {
    type: DATESCHEDULE_RECEIVE,
    dateSchedules: dateSchedules
  }
}

export function receiveDateSchedules(dateSchedules) {
  return {
    type: DATESCHEDULES_RECEIVE,
    dateSchedules: dateSchedules
  }
}
