import { WEEKSCHEDULE_GET, WEEKSCHEDULE_POST, WEEKSCHEDULE_PUT, WEEKSCHEDULE_DELETE, WEEKSCHEDULE_RECEIVE, WEEKSCHEDULES_RECEIVE } from '../constants/WeekScheduleConstants';

const initialState = {
  list: [],
  isFetching: false
};

export function weekSchedules(state = initialState, action) {
  switch (action.type) {
    case WEEKSCHEDULE_POST: {
       return {
         ...state,
        isFetching: false,
        list: [
          ...state.list,
          action.weekSchedule
        ]
      }
    }

    case WEEKSCHEDULE_PUT: {
      let weekScheduleItemIndex = null;

      state.list.forEach((weekScheduleItem, index) => {
        if (weekScheduleItem.id === action.weekScheduleItem.id) {
          weekScheduleItemIndex = index;
        }
      });

      return {
        ...state,
        list: [
          ...state.list.slice(0, weekScheduleItemIndex),
          {
            ...state.list[weekScheduleItemIndex],
            ...action.weekScheduleItem
          },
          ...state.list.slice(weekScheduleItemIndex + 1)
        ]
      };
    }

    case WEEKSCHEDULE_DELETE: {
      let weekScheduleIndex = null;
      let list = state.list.slice();

      list.forEach((weekSchedule, index) => {
        if (weekSchedule.id === action.weekScheduleId) {
          weekScheduleIndex = index;
        }
      });

      list.splice(weekScheduleIndex, 1);

      return {
        ...state,
        list: list
      };
    }

    case WEEKSCHEDULE_GET: {
      return {
        ...state,
        isFetching: true
      };
    }

    case WEEKSCHEDULES_RECEIVE: {
      return {
        ...state,
        isFetching: false,
        list: action.weekSchedules
      };
    }

    default:
      return state;
  }
}