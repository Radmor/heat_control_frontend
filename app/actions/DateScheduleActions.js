import api from '../api';
import { DATESCHEDULE_GET, DATESCHEDULE_POST, DATESCHEDULE_PUT, DATESCHEDULE_DELETE, DATESCHEDULE_RECEIVE } from '../constants/DateScheduleConstants';


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
    }).then(json => dispatch(receiveDateSchedules(json)))
  };
}

function requestDateSchedules() {
  return {
    type: DATESCHEDULE_GET
  }
}

function receiveDateSchedules(dateSchedules) {
  console.log(dateSchedules);
  return {
    type: DATESCHEDULE_RECEIVE,
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