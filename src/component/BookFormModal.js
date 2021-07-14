import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

export class BookFormModal extends Component {



    render() {
        return (
            <div>
                <Modal show={this.props.showModel}>
                    <Modal.Header>
                        <Modal.Title>Add Book To Favorites</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.props.addBook}>
                            <input placeholder="Book Name" type="text" name="bookName" />
                            <input placeholder="Book Description" type="text" name="description" />
                            <input placeHolder="Book Image" type="text" name="imgUrl" />
                            <select placeHolder="State" type="select" name="state">
                                <option value="readLater">Read ....</option>
                                <option value="topTen">Favorit Five</option>
                                <option value="recommended">Recommended To Me</option>
                            </select>
                            <input type="submit" value="ADD Book" />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handlerClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default BookFormModal
