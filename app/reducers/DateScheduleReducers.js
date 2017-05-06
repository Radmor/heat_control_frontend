import { DATESCHEDULE_GET, DATESCHEDULE_POST, DATESCHEDULE_PUT, DATESCHEDULE_DELETE, DATESCHEDULE_RECEIVE } from '../constants/DateScheduleConstants';

const initialState = {
  list: [],
  isFetching: false
};

export function dateSchedules(state = initialState, action) {
  switch (action.type) {
    case DATESCHEDULE_POST: {
       return {
         ...state,
        list: [
          ...state.list,
          action.dateSchedule
        ]
      }
    }

    case DATESCHEDULE_PUT: {
      let dateScheduleIndex = null;

      state.list.forEach((dateSchedule, index) => {
        if (dateSchedule.id === action.dateSchedule.id) {
          dateScheduleIndex = index;
        }
      });

      return {
        ...state,
        list: [
          ...state.list.slice(0, dateScheduleIndex),
          {
            ...state.list[dateScheduleIndex],
            ...action.dateSchedule
          },
          ...state.list.slice(dateScheduleIndex + 1)
        ]
      };
    }

    case DATESCHEDULE_DELETE: {
      let dateScheduleIndex = null;
      let list = state.list.slice();

      list.forEach((dateSchedule, index) => {
        if (dateSchedule.id === action.dateSchedule.id) {
          dateScheduleIndex = index;
        }
      });

      list.splice(dateScheduleIndex, 1);

      return {
        ...state,
        list: list
      };
    }

    case DATESCHEDULE_GET: {
      return {
        ...state,
        isFetching: true
      };
    }

    case DATESCHEDULE_RECEIVE: {
      console.log(state);
      return {
        ...state,
        isFetching: false,
        list: action.dateSchedules
      };
    }

    default:
      return state;
  }
}