import React from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';


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
    constructor() {
    super();

    this.state = {
    };
    this.handleClose = this.handleClose.bind(this);
    }

    afterOpenModal() {
    // this.refs.textfield.focus();
    }

    handleClose(id, e) {
        this.props.handleClose();
    }
    
    changeValue(id, e, value){
        this.props.updateTitle(value, id); 
    }

    after(){
  }



    render(){
        return(
            <Modal
                isOpen = { this.props.isOpen }
                contentLabel='Modal'
                style={customStyles}
                onAfterOpen={this.after}
            >
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
                <button onClick={this.handleClose.bind(this)}>close</button>
            </Modal>
        )
    }
}

export default EditModal;