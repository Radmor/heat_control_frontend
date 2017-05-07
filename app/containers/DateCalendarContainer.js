import { connect } from 'react-redux'
import DateCalendar from '../components/DateCalendar'
import { createDateScheduleItem, getDateScheduleItems } from '../actions/DateScheduleActions'
import moment from 'moment';

const mapStateToProps = (state) => {
  
  var list = [];
  for(var dateScheduleItem of state.dateSchedules.list)
{
  list.push({
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
    getDateScheduleItems: (dateScheduleItems) =>
      dispatch(getDateScheduleItems(dateScheduleItems))
  }
}

const DateCalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateCalendar)

export default DateCalendarContainer