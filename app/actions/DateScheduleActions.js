import { DATESCHEDULE_GET, DATESCHEDULE_POST, DATESCHEDULE_PUT, DATESCHEDULE_DELETE, DATESCHEDULE_RECEIVE, DATESCHEDULES_RECEIVE } from '../constants/DateScheduleConstants';

export function updateDateScheduleItem(dateScheduleItem){
  return {
    type: DATESCHEDULE_PUT,
    dateScheduleItem: dateScheduleItem
  }
}

export function requestDateScheduleItems() {
  return {
    type: DATESCHEDULE_GET
  }
}

export function createDateScheduleItem(dateSchedule) {
  return {
    type: DATESCHEDULE_POST,
    dateSchedule: dateSchedule
  }
}

export function receiveDateScheduleItems(dateSchedules) {
  return {
    type: DATESCHEDULES_RECEIVE,
    dateSchedules: dateSchedules
  }
}

export function deleteDateScheduleItem(dateScheduleId){
  return {
    type: DATESCHEDULE_DELETE,
    dateScheduleId: dateScheduleId
  }
}