import { connect } from 'react-redux'
import DateCalendar from '../components/DateCalendar'
import { createDateScheduleItem, getDateScheduleItems, updateDateScheduleItem, deleteDateScheduleItem } from '../effects/DateScheduleEffects'
import moment from 'moment';


function eventToDateScheduleItem(event){
        return {
            'id':event.id,
            'temperature': event.title,
            'start': event.start,
            'end': event.end
        }
    }

const mapStateToProps = (state) => {
  
  var list = [];
  for(var dateScheduleItem of state.dateSchedules.list)
    {
      list.push({
            'id': dateScheduleItem.id,
            'title':dateScheduleItem.temperature,
            'start': new Date(dateScheduleItem.start),
            'end': new Date(dateScheduleItem.end)
          })
    } 

  return {
    events: list
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => {
      
      dispatch(createDateScheduleItem(eventToDateScheduleItem(event)))
    },
    getEvents: () => {
      dispatch(getDateScheduleItems())
    },
    updateEvent: (event, newTemperature) => {
      dispatch(updateDateScheduleItem(eventToDateScheduleItem(event), newTemperature))
    },
    deleteEvent: (event) => {
      dispatch(deleteDateScheduleItem(eventToDateScheduleItem(event)))
    }
      
  }
}

const DateCalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateCalendar)

export default DateCalendarContainer