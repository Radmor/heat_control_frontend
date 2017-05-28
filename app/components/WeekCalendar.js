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
            editedTitle: 0
        }
        
        this.handleUpdateEvent = this.handleUpdateEvent.bind(this);
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    }

    componentDidMount(){
        
        this.props.getEvents();
    }

    checkCorrectness(slot){
        for(var event of this.props.events){
            if("undefined" !== typeof event){
                 if((event.start < slot.start && event.end > slot.start) || (event.start < slot.end && event.end > slot.end) || (slot.start <= event.start && slot.end >= event.end)){
                    return false;
                }
            }
        }
        return true;
    }


    addSlot(event){
        event.title = 17;
        if(this.checkCorrectness(event)){
            this.props.createEvent(event);
        }
        
    }

    handleUpdateEvent(){
        this.props.updateEvent(this.getEventById(this.state.eventId), this.state.editedTitle);
        this.handleModalClose();
    }

    handleDeleteEvent(){
        this.props.deleteEvent(this.getEventById(this.state.eventId));
        this.handleModalClose();
    }


    handleModalClose(){
        this.setState({modal:false})
    }

    handleModalOpen(){
        this.setState({editedTitle:this.getEventById(this.state.eventId).title, modal:true})
    }

    handleEventTemperatureUpdate(id, newValue){
        this.state.events[id].title = newValue;
    }

    handleSelectEvent(e){
        this.state.eventId = e.id;
        this.setState({eventId:this.state.eventId});
        this.handleModalOpen();
    }

    getEventById(id){
        for(var event of this.props.events){
            if(id === event.id){
                return event
            }
        }
    }

    updateTitle(title, id){
        this.setState({editedTitle: title}); 
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
                events={ this.props.events }
                date={ this.props.defaultDate }
                onSelectSlot={e => this.addSlot(e)}
                onSelectEvent={e => this.handleSelectEvent(e)}
                view='week'
                views={ ['week'] }
                toolbar={ false }
                step={ this.state.step }
                formats={   {dayFormat: 'dddd'} }
            >
                <EditModal
                    isOpen={ this.state.modal }
                    eventId={this.state.eventId}
                    handleClose={(e) => this.handleModalClose(e)}
                    handleUpdateEvent={this.handleUpdateEvent}
                    handleDeleteEvent={this.handleDeleteEvent}
                    updateTitle={(title, id) => this.updateTitle(title, id)}
                    value={this.state.editedTitle}
                />

            </BigCalendar>
        );
  }
}

export default DateCalendar;
