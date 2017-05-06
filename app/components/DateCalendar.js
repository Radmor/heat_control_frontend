import React from 'react'
import ReactDOM from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import * as DateScheduleActions from '../actions/DateScheduleActions';
import EditModal from './EditModal'

import store from '../app';

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class DateCalendar extends React.Component{

    constructor(props) {
        super(props);
        
        this.state= {
            events : [],
            step: 15, 
            modal: false
        }
    }

    componentDidMount(){
        
        this.props.store.dispatch(DateScheduleActions.getDateScheduleItems());
        // console.log(this.props.store.getState());
    }

    checkCorrectness(slot){
        for(var event of this.state.events){
            if("undefined" !== typeof event){
                 if((event.start < slot.start && event.end > slot.start) || (event.start < slot.end && event.end > slot.end) || (slot.start <= event.start && slot.end >= event.end)){
                    return false;
                }
            }
        }
        return true;
    }


    addSlot(slot){
        if(this.checkCorrectness(slot)){
            slot.temperature = 17
            // var created_slot;
            store.dispatch(DateScheduleActions.createDateScheduleItem({
                temperature: slot.temperature,
                start: slot.start,
                end: slot.end
            }));

            var created_slot = null;
            this.state.events[created_slot.id] = {
                id: created_slot.id,
                'title': slot.temperature,
                'start': slot.start,
                'end': slot.end
            };
            this.setState({events: this.state.events})
        }
        
    }

    handleModalClose(){
        this.setState({modal:false})
    }

    handleModalOpen(){
        this.setState({modal:true});
    }

    handleEventTemperatureUpdate(id, newValue){
        this.state.events[id].title = newValue;
        // this.setState({events: this.state.events});
    }

    handleSelectEvent(e){
        this.state.eventId = e.id;
        this.setState({eventId:this.state.eventId});
        this.handleModalOpen();
    }

    updateTemperature(temperature, id){
        this.state.events[id].title = temperature;
        this.setState({events: this.state.events});
    }

    getSafe(fn) {
    try {
        return fn();
    } catch (e) {
        return undefined;
    }
}

    render() {
        return(
            <BigCalendar
                selectable
                events={this.state.events}
                defaultDate={new Date()}
                onSelectSlot={e => this.addSlot(e)}
                onSelectEvent={e => this.handleSelectEvent(e)}
                view='week'
                views={ ['week'] }
                toolbar={ false }
                step={ this.state.step }
            >
                <EditModal
                    isOpen={ this.state.modal }
                    eventId={this.state.eventId}
                    handleClose={(e) => this.handleModalClose(e)}
                    updateTemperature={(temperature, id) => this.updateTemperature(temperature, id)}
                    value={this.getSafe(() => this.state.events[this.state.eventId].title)}
                />

            </BigCalendar>
        );
  }
}

export default DateCalendar;
