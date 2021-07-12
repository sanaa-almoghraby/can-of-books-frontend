import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap/'



class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataofBooks: [],
      showData: false
    }
  }
  componentDidMount = async () => {
    const { data } = this.props.auth0;
    let resData = await axios.get(`${process.env.REACT_APP_BOOK}book?myEmail=${data.email}`)

    await this.setState({
      dataofBooks: resData.data,
      showData: true
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
            this.state.dataofBooks.map(book => {


              return (
                <Card  >

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
              )

            })

          }
        </div>

      </Jumbotron>
    )
  }
}

export default withAuth0( MyFavoriteBooks);
