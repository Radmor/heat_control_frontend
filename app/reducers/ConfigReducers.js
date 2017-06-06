import { SCREEN_CHANGE, DATESCREEN, WEEKSCREEN } from '../constants/ConfigConstants';

const initialState = {
  screen:DATESCREEN
};

export function config(state = initialState, action) {
  switch (action.type) {
    case SCREEN_CHANGE: {
       return {
         ...state,
        screen: action.screen
      }
    }

    default:
      return state;
  }
}