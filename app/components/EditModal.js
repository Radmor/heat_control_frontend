import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class EditModal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            deleteConfirmationDialogOpen: false
        };
        this.handleDeleteConfirmationDialogOpen = this.handleDeleteConfirmationDialogOpen.bind(this);
        this.handleDeleteConfirmationDialogClose = this.handleDeleteConfirmationDialogClose.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdateEvent = this.handleUpdateEvent.bind(this);
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    }


    handleClose(id, e) {
        this.props.handleClose();
    }
    
    changeValue(id, e, value){
        this.props.updateTitle(value, id); 
    }

    handleDeleteConfirmationDialogOpen(){
        this.setState({deleteConfirmationDialogOpen:true});
    }

    handleDeleteConfirmationDialogClose(){
        this.setState({deleteConfirmationDialogOpen:false});
    }
    
    handleUpdateEvent(){
        this.props.handleUpdateEvent();
    }

    handleDeleteEvent(){
        this.props.handleDeleteEvent();
        this.handleDeleteConfirmationDialogClose();
    }



    render(){
        const deleteConfirmationDialogActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleDeleteConfirmationDialogClose}
            />,
            <FlatButton
                label="Delete"
                primary={true}
                onTouchTap={this.handleDeleteEvent}
            />
        ];



        return(
            <Dialog
                open = { this.props.isOpen }
            >
                <RaisedButton label="Close" onTouchTap={this.handleClose} />
                <h1>Modal Content</h1>
                
                <form onSubmit={this.handleClose.bind(this, this.props.eventId)}>
                    <TextField
                        ref="textfield"
                        required
                        autoFocus={true}
                        type="number"
                        value={this.props.value}
                        onChange={this.changeValue.bind(this, this.props.eventId)}
                        onSubmit={this.handleClose.bind(this)}
                    />
                </form>
                <RaisedButton label="Update" onTouchTap={this.handleUpdateEvent} />
                <RaisedButton label="Delete" onTouchTap={this.handleDeleteConfirmationDialogOpen} />
                <Dialog
                    actions={deleteConfirmationDialogActions}
                    modal={false}
                    open={this.state.deleteConfirmationDialogOpen}
                    onRequestClose={this.handleDeleteConfirmationDialogClose}
                >
                    Are you sure you want to delete this event?
                </Dialog>

            </Dialog>
        )
    }
}

export default EditModal;