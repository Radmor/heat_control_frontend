import api from '../api';
import * as dateScheduleActions from '../actions/DateScheduleActions';

export function getDateScheduleItems() {
  return dispatch => {
    dispatch(dateScheduleActions.requestDateScheduleItems())
    return api.getDateScheduleItems()
      .then(json => dispatch(dateScheduleActions.receiveDateScheduleItems(json)))
  }
}

export function createDateScheduleItem(dateScheduleItem) {
  return dispatch => {
    return api.createDateScheduleItem({
      body: JSON.stringify({
        temperature: dateScheduleItem.temperature,
        start: dateScheduleItem.start,
        end: dateScheduleItem.end
      })
    }).then(json => dispatch(dateScheduleActions.createDateScheduleItem(json)))
  };
}

export function updateDateScheduleItem(dateScheduleItem, newTemperature){
  return dispatch => {
    return api.updateDateScheduleItem({
      body: JSON.stringify({
        id: dateScheduleItem.id,
        temperature: newTemperature,
        start: dateScheduleItem.start,
        end: dateScheduleItem.end
      })
    },
    dateScheduleItem.id).then(json => dispatch(dateScheduleActions.updateDateScheduleItem(json)))
  }
}