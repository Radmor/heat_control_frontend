import { WEEKSCHEDULE_GET, WEEKSCHEDULE_POST, WEEKSCHEDULE_PUT, WEEKSCHEDULE_DELETE, WEEKSCHEDULE_RECEIVE, WEEKSCHEDULES_RECEIVE } from '../constants/WeekScheduleConstants';

export function updateWeekScheduleItem(weekScheduleItem){
  return {
    type: WEEKSCHEDULE_PUT,
    weekScheduleItem: weekScheduleItem
  }
}

export function requestWeekScheduleItems() {
  return {
    type: WEEKSCHEDULE_GET
  }
}

export function createWeekScheduleItem(weekSchedule) {
  return {
    type: WEEKSCHEDULE_POST,
    weekSchedule: weekSchedule
  }
}

export function receiveWeekScheduleItems(weekSchedules) {
  return {
    type: WEEKSCHEDULES_RECEIVE,
    weekSchedules: weekSchedules
  }
}

export function deleteWeekScheduleItem(weekScheduleId){
  return {
    type: WEEKSCHEDULE_DELETE,
    weekScheduleId: weekScheduleId
  }
}