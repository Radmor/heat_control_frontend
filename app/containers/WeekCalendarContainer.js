import { connect } from 'react-redux'
import WeekCalendar from '../components/WeekCalendar'
import { createWeekScheduleItem, getWeekScheduleItems, updateWeekScheduleItem, deleteWeekScheduleItem } from '../effects/WeekScheduleEffects'
import moment from 'moment';


// default date must be sunday

const defaultDay = 4
const defaultMonth = 5 //For some reason month is incremented in calendar display
const defaultYear = 2017
const defaultDate = new Date(defaultYear, defaultMonth, defaultDay);


const weekDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
]

function getWeekDayName(date){
  return weekDays[date.getDay()];
}

function getDateForCalendar(day, time){
  const splited_time = time.split(':');
  return new Date(defaultYear, defaultMonth, defaultDay + weekDays.indexOf(day), splited_time[0], splited_time[1]);
}

function eventToWeekScheduleItem(event){
        return {
            'id':event.id,
            'day_of_week': getWeekDayName(event.start),
            'temperature': event.title,
            'start_time': event.start,
            'end_time': event.end
        }
    }

function weekScheduleItemToEvent(weekScheduleItem){
  return {
            'id': weekScheduleItem.id,
            'title':weekScheduleItem.temperature,
            'start': getDateForCalendar(weekScheduleItem.day_of_week, weekScheduleItem.start_time),
            'end': getDateForCalendar(weekScheduleItem.day_of_week, weekScheduleItem.end_time)
          }
}

const mapStateToProps = (state) => {
  
  var list = [];
  for(var weekScheduleItem of state.weekSchedules.list)
    {
      list.push(weekScheduleItemToEvent(weekScheduleItem));
    } 

  return {
    events: list,
    defaultDate: defaultDate
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => {
      
      dispatch(createWeekScheduleItem(eventToWeekScheduleItem(event)))
    },
    getEvents: () => {
      dispatch(getWeekScheduleItems())
    },
    updateEvent: (event, newTemperature) => {
      dispatch(updateWeekScheduleItem(eventToWeekScheduleItem(event), newTemperature))
    },
    deleteEvent: (event) => {
      dispatch(deleteWeekScheduleItem(eventToWeekScheduleItem(event)))
    }
      
  }
}

const WeekCalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekCalendar)

export default WeekCalendarContainer