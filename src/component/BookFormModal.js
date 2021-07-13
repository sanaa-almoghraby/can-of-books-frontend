import React, { Component } from 'react'
import Modal from 'react-bootstrap/'
export class BookFormModal extends Component {
constructor(props){
    super(props);
    this.state = {
        showmodel: false
    }
   
}
handleShow=()=>{
    this.setState({
        showmodel:true

    })

}

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    ADD BOOK
                </Button>

                <Modal show={this.state.showmodel} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Book To Favorites</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose=>}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default BookFormModal
