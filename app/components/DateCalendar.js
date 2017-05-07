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
            step: 15, 
            modal: false,
            editableTemperature: 0
        }
    }

    componentDidMount(){
        
        this.props.getDateScheduleItems();
    }

    checkCorrectness(slot){
        for(var event of this.props.dateSchedules){
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
            this.props.createDateScheduleItem({ 
                temperature: slot.temperature, 
                start: slot.start, 
                end: slot.end 
            });
        }
        
    }


    handleModalClose(){
        this.props.updateDateScheduleItem(this.getEventById(this.state.eventId), this.state.editableTemperature);
        this.setState({modal:false})
    }

    handleModalOpen(){
        this.setState({editableTemperature:this.getEventById(this.state.eventId).title, modal:true})
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

    getEventById(id){
        for(var event of this.props.dateSchedules){
            if(id === event.id){
                return event
            }
        }
    }

    updateTemperature(temperature, id){
        this.setState({editableTemperature: temperature}); 
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
                events={ this.props.dateSchedules }
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
                    value={this.state.editableTemperature}
                />

            </BigCalendar>
        );
  }
}

export default DateCalendar;
