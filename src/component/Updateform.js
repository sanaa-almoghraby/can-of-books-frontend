import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

class Updateform extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.updateFun}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>BOOK NAME</Form.Label>
                        <Form.Control type="text" defaultValue={this.props.dataofBooks[this.props.index].name} name="bookName"/>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" defaultValue={this.props.dataofBooks[this.props.index].description} name="description"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>BOOK IMAGE</Form.Label>
                        <Form.Control type="text" defaultValue={this.props.dataofBooks[this.props.index].img} name="imgUrl" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>STATUS</Form.Label>
                        <Form.Control type="text" defaultValue={this.props.dataofBooks[this.props.index].status} name="state"  />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        UpDATE
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Updateform
