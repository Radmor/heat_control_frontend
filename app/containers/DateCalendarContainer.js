import { connect } from 'react-redux'
import DateCalendar from '../components/DateCalendar'
import { createDateScheduleItem, getDateScheduleItems, updateDateScheduleItem } from '../actions/DateScheduleActions'
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
    dateSchedules: list//convertToEvents(state.dateSchedules.list)
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createDateScheduleItem: (dateScheduleItem) => {
      dispatch(createDateScheduleItem(dateScheduleItem))
    },
    getDateScheduleItems: (dateScheduleItems) => {
      dispatch(getDateScheduleItems(dateScheduleItems))
    },
    updateDateScheduleItem: (event, newTemperature) => {
      dispatch(updateDateScheduleItem(eventToDateScheduleItem(event), newTemperature))
    }
      
  }
}

const DateCalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateCalendar)

export default DateCalendarContainer