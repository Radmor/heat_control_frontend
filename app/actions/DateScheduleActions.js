import api from '../api';
import { DATESCHEDULE_GET, DATESCHEDULE_POST, DATESCHEDULE_PUT, DATESCHEDULE_DELETE, DATESCHEDULE_RECEIVE, DATESCHEDULES_RECEIVE } from '../constants/DateScheduleConstants';


export function getDateScheduleItems() {
  return dispatch => {
    dispatch(requestDateSchedules())
    return api.getDateScheduleItems()
      .then(json => dispatch(receiveDateSchedules(json)))
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
    }).then(json => dispatch(receiveDateSchedule(json)))
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
    dateScheduleItem.id).then(json => dispatch(updateDateSchedule(json)))
  }
}

function updateDateSchedule(dateScheduleItem){
  return {
    type: DATESCHEDULE_PUT,
    dateScheduleItem: dateScheduleItem
  }
}

function requestDateSchedules() {
  return {
    type: DATESCHEDULE_GET
  }
}

function receiveDateSchedule(dateSchedules) {
  return {
    type: DATESCHEDULE_RECEIVE,
    dateSchedules: dateSchedules
  }
}

function receiveDateSchedules(dateSchedules) {
  return {
    type: DATESCHEDULES_RECEIVE,
    dateSchedules: dateSchedules
  }
}



// export function fetchPosts(subreddit) {
//   return function (dispatch) {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json =>
//         dispatch(receivePosts(subreddit, json))
//       )
//   }
// }