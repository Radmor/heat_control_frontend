import { SCREEN_CHANGE } from '../constants/ConfigConstants';

export function changeScreen(screen){
  return {
    type: SCREEN_CHANGE,
    screen: screen
  }
}
