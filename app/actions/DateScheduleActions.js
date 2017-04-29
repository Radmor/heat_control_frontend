import api from '../api';


export function getDateScheduleItems(){
    return () => {
        return api.getDateScheduleItems();
    };
}


export function createDateScheduleItem(dateScheduleItem) {
  return () => {
    return api.createDateScheduleItem({
      body: JSON.stringify({
        temperature: dateScheduleItem.temperature,
        start: dateScheduleItem.start,
        end: dateScheduleItem.end
      })
    })
  };
}
