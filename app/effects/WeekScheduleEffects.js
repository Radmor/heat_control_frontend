import api from '../api';
import * as weekScheduleActions from '../actions/WeekScheduleActions';

function getTime(date){
  return date.getHours().toString() + ':' + date.getMinutes()
}

export function getWeekScheduleItems() {
  return dispatch => {
    dispatch(weekScheduleActions.requestWeekScheduleItems())
    return api.getWeekScheduleItems()
      .then(json => dispatch(weekScheduleActions.receiveWeekScheduleItems(json)))
  }
}

export function createWeekScheduleItem(weekScheduleItem) {
  return dispatch => {
    return api.createWeekScheduleItem({
      body: JSON.stringify({
        temperature: weekScheduleItem.temperature,
        day_of_week: weekScheduleItem.day_of_week,
        start_time: getTime(weekScheduleItem.start_time),
        end_time: getTime(weekScheduleItem.end_time)
      })
    }).then(json => dispatch(weekScheduleActions.createWeekScheduleItem(json)))
  };
}

export function updateWeekScheduleItem(weekScheduleItem, newTemperature){
  return dispatch => {
    return api.updateWeekScheduleItem({
      body: JSON.stringify({
        id: weekScheduleItem.id,
        temperature: newTemperature,
        day_of_week: weekScheduleItem.day_of_week,
        start_time: weekScheduleItem.start_time,
        end_time: weekScheduleItem.end_time
      })
    },
    weekScheduleItem.id).then(json => dispatch(weekScheduleActions.upweekWeekScheduleItem(json)))
  }
}

export function deleteWeekScheduleItem(weekScheduleItem){
  return dispatch => {
    return api.deleteWeekScheduleItem({
      body: JSON.stringify({
        id: weekScheduleItem.id
      })
    },
    weekScheduleItem.id).then(dispatch(weekScheduleActions.deleteWeekScheduleItem(weekScheduleItem.id)))
  }
}