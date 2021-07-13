import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card ,Button} from 'react-bootstrap/'
import BookFormModal from './component/BookFormModal';



class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataofBooks: [],
      showData: false,
      myEmail:'',
      showModel: false,
    }
  }
  componentDidMount = async () => {
    // const { data } = this.props.auth0;
    // this.setState({
    //   myEmail:`${data.email}`
    // })
    let resData = await axios.get(`${process.env.REACT_APP_BOOK}book?myEmail=${this.props.auth0.user.email}`)

    await this.setState({
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
  addBook= async (e)=>{
    e.preventDefault();
    let bookObj={
      email:this.state.myEmail,
      name : e.target.bookName.value,
      description : e.target.description.value,
      status : e.target.state.value,
      img : e.target.imgUrl.value,
    }
    let url=`${process.env.REACT_APP_BOOK}books`
    let addResponse= await axios.post(url,bookObj)
    

    this.setState({
      dataofBooks:addResponse.data
    })

  }



  render() {
    return (
      <Jumbotron>
        <>
          <Button variant="dark" onClick={this.handlerShow}>
            Add  Book
          </Button>

          <BookFormModal showModel={this.state.showModel} handlerClose={this.handlerClose}  addBook={this.addBook}/>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <div className="bookcont">
            {this.state.showData &&
              this.state.dataofBooks.map((book, index) => {


                return (
                  <Card key={index} style={{ display: "inline-block" ,width:"200"}} >

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
                    <Button variant="danger" onClick={() => this.props.deleteBook(index)}>
                      Delete
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
