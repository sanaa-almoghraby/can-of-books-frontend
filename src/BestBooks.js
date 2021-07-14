import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Button } from 'react-bootstrap/'
import BookFormModal from './component/BookFormModal';
import Updateform from './component/Updateform';



class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataofBooks: [],
      showData: false,
      myEmail: '',
      showModel: false,
      showForm: false,
      index: 0
    }
  }
  componentDidMount = async () => {

    // const { user } = this.props.auth0.email;

    const { email } = this.props.auth0;
    this.setState({
      myEmail: email
    })
    let resData = await axios.get(`${process.env.REACT_APP_BOOK}book?myEmail=${this.props.auth0.user.email}`)

    this.setState({
      dataofBooks: resData.data,
      showData: true
    })

  }
  handlerShow = async () => {
    await this.setState({
      showModel: true
    })
  }
  handlerClose = async () => {
    await this.setState({
      showModel: false
    })
  }
  addBook = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    let bookObj = {
      email: user.email,
      name: e.target.bookName.value,
      description: e.target.description.value,
      status: e.target.state.value,
      img: e.target.imgUrl.value,
    }
    console.log('ssssssssssssssss', bookObj);
    let url = `${process.env.REACT_APP_BOOK}addbooks`
    let addResponse = await axios.post(url, bookObj)


    this.setState({
      dataofBooks: addResponse.data
    })

  }
  deleteBook = async (index) => {
    let deleopj = {
      email: this.props.auth0.user.email

    }

    let deleData = await axios.delete(`${process.env.REACT_APP_BOOK}delebook/${index}`, { params: deleopj })
    await this.setState({
      dataofBooks: deleData.data
    })
    // console.log('ddddddd',this.state.dataofBooks);
  }
  showForms = (index) => {
    this.setState({
      showForm: true,
      index: index
    })

  }
  updateFun = async (e) => {
    e.preventDefault();

    let bookObj = {

      name: e.target.bookName.value,
      description: e.target.description.value,
      status: e.target.state.value,
      img: e.target.imgUrl.value,
    }
    // let= `${process.env.REACT_APP_BOOK}addbooks`
    let updateResponse = await axios.put(`${process.env.REACT_APP_BOOK}updatebooks/${this.state.index}`, bookObj)
    await this.setState({
      dataofBooks: updateResponse.data,
      showForm: false
    })

  }



  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <div className="bookcont">
          {this.state.showData &&
            this.state.dataofBooks.map((book, index) => {
              return (
                <div key={index}>
                  <Card >

                    <Card.Body>
                      <Card.Title>{book.name}</Card.Title>
                      <Card.Text>
                        {book.description}
                      </Card.Text>
                      <Card.Text>
                        {book.status}
                      </Card.Text>
                      <Card.Img src={book.img} alt={book.name} />
                    </Card.Body>
                  </Card>
                </div>

              )
            })
        <>
          <Button variant="dark" onClick={this.handlerShow}>
            Add  Book
          </Button>

          <BookFormModal showModel={this.state.showModel} handlerClose={this.handlerClose} addBook={this.addBook} />
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          {this.state.showForm &&
            <Updateform dataofBooks={this.state.dataofBooks} index={this.state.index} updateFun={this.updateFun}/>
          }
          <div className="bookcont">

            {this.state.showData &&
              this.state.dataofBooks.map((book, index) => {


                return (
                  <Card key={index} style={{ display: "inline-block", width: "200" }} >

                    <Card.Body>
                      <Card.Title>{book.name}</Card.Title>
                      <Card.Text>
                        {book.description}
                      </Card.Text>
                      <Card.Text>
                        {book.status}
                      </Card.Text>
                      <Card.Img src={book.img} alt={book.name} />
                    </Card.Body>
                    <Button variant="danger" onClick={() => this.deleteBook(index)}>
                      Delete
                    </Button>
                    <Button variant="danger" onClick={() => this.showForms(index)}>
                      Update
                    </Button>
                  </Card>
                )

              })

            }
          </div>
        </>
      </Jumbotron>

    )
  }
}

export default withAuth0(MyFavoriteBooks);
