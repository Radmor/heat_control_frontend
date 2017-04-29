import React from 'react'
import ReactDOM from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import * as DateScheduleActions from '../actions/DateScheduleActions'

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class DateCalendar extends React.Component{

    constructor(props) {
        super(props);
        
        this.state= {
            events : [],
            step: 15
        }
    }

    checkCorrectness(slot){
        for(var event of this.state.events){
            if((event.start < slot.start && event.end > slot.start) || (event.start < slot.end && event.end > slot.end)){
                return false;
            }
        }
        return true;
    }

    addSlot(slot){
        if(this.checkCorrectness(slot)){
            slot.temperature = 17
            var created_slot = DateScheduleActions.createDateScheduleItem({
                temperature: slot.temperature,
                start: slot.start,
                end: slot.end
            });
            this.state.events.push({
                id: created_slot.id,
                'title': slot.temperature,
                'start': slot.start,
                'end': slot.end
                }
            );
            this.setState({events: this.state.events})
        }
        
    }

    render() {
        return(
            <BigCalendar
                selectable
                events={this.state.events}
                defaultDate={new Date()}
                onSelectSlot={e => this.addSlot(e)}
                onSelectEvent={e => console.log(e.title)}
                view='week'
                views={ ['week'] }
                toolbar={ false }
                step={ this.state.step }
            />
        );
  }
}

export default DateCalendar;
