import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './bookholder.jpg'; // Tell webpack this JS file uses this image
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    const res = await axios.get('https://can-of-books-js301.herokuapp.com/books');
    this.setState({
      books: res.data
    })
    console.log(this.state)
  }

  componentDidMount() {
    console.log("we are inside componentDidMount");
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (

          <Carousel fade variant="dark" style={{ width: '100%', height: '100%' }}>

            {this.state.books.map((value, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt={value.title}
                  />
                  <Carousel.Caption>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                    <p>{value.status}</p>

                  </Carousel.Caption>
                </Carousel.Item>
              )
            }
            )

            }

          </Carousel>

        ) : (<h3>No Books Found :(</h3>)
        };
      </>
    )
  }
}

export default BestBooks;
