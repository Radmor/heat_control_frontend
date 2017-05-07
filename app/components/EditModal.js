import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const customStyles = {
  content : {
    
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


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

    componentDidMount(){

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
            <Modal
                isOpen = { this.props.isOpen }
                contentLabel='Modal'
                style={customStyles}
                onAfterOpen={this.after}
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

            </Modal>
        )
    }
}

export default EditModal;