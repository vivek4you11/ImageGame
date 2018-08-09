import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import alphabet_B from './images/B.jpg';
import alphabet_H from './images/H.jpg';
import alphabet_J from './images/J.jpg';
import alphabet_K from './images/K.jpg';
import alphabet_L from './images/L.jpg';
import alphabet_O from './images/O.jpg';
import alphabet_R from './images/R.jpg';
import alphabet_S from './images/S.jpg';
import alphabet_Z from './images/Z.jpg';
import correct from './images/correctImage.jpg';
import wrong from './images/wrongImage.jpg';

//An Array contains list of different images
const imageDetailsArray = [
  {
    image: alphabet_B
  },
  {
    image: alphabet_H
  },
  {
    image: alphabet_J
  },
  {
    image: alphabet_K
  },
  {
    image: alphabet_L
  },
  {
    image: alphabet_O
  },
  {
    image: alphabet_R
  },
  {
    image: alphabet_S
  },
  {
    image: alphabet_Z
  },
  {
    image: correct
  },
  {
    image: wrong
  }
];

//This component returns the view section including GameBoard
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      effect: 1,
      counter: 0,
      correctAttempt: 0,
      wrongAttempt: 0
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.displayRandomImage = this.displayRandomImage.bind(this);
  }

  //This setTimeout method will be called after 10 seconds to hide the 9 images
  componentDidMount = () => {
    setTimeout(
      function() {
        this.setState({
          effect: 0
        });
      }.bind(this),
      10000
    );
  };

  //This function is responsible for business logic
  clickHandler = event => {
    this.setState({
      counter: this.state.counter + 1
    });
    let selectedImage = event.target.src;
    let displayImage = document.getElementById('head').childNodes[0].src;

    //compare the selected image with displayed image
    if (selectedImage === displayImage) {
      alert('Congrats, Match Found :) ');
      event.target.src = imageDetailsArray[9].image;
      event.target.style.opacity = 1;
      this.setState({
        correctAttempt: this.state.correctAttempt + 1
      });
    } else {
      alert('Oops!! Try Again :( ');
      this.setState({
        wrongAttempt: this.state.wrongAttempt + 1
      });
    }

    //if the value of this.state.correctAttempt == 9 then Congrats message and reset the application state
    if (this.state.correctAttempt === 9) {
      alert('Congratulations !!, your total number of attempt is : ' + this.state.counter);
      window.location.reload();
    }
    this.displayRandomImage();
  };

  //This function is used for displaying random images
  displayRandomImage = () => {
    let num = Math.floor(Math.random() * 9);
    document.canvas.src = imageDetailsArray[num].image;
  };

  //The render method will return the UI component
  render() {
    let style = {
      width: '100%',
      opacity: this.state.effect
    };
    return (
      <div>
        <Header />
        <Jumbotron>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={6} className="displayContainer">
                <div id="head">
                  <img src={imageDetailsArray[0].image} alt="alphabet_B" name="canvas" style={{ width: '70%', marginLeft: '15%' }} />
                </div>
              </Col>
              <Col xs={6} md={6} className="mainContainer">
                <div id="board" onClick={this.clickHandler}>
                  <div className="square">
                    <img src={alphabet_B} alt="alphabet_B" style={style} />
                  </div>
                  <div className="square">
                    <img src={alphabet_H} alt="alphabet_H" style={style} />
                  </div>
                  <div className="square">
                    <img src={alphabet_J} alt="alphabet_J" style={style} />
                  </div>
                  <div className="square">
                    <img src={alphabet_K} alt="alphabet_K" style={style} />
                  </div>
                  <div className="square">
                    <img src={alphabet_L} alt="alphabet_L" style={style} />
                  </div>
                  <div className="square">
                    <img src={alphabet_O} alt="alphabet_O" style={style} />
                  </div>
                  <div className="square">
                    <img src={alphabet_R} alt="alphabet_R" style={style} />
                  </div>
                  <div className="square">
                    <img src={alphabet_S} alt="alphabet_S" style={style} />
                  </div>
                  <div className="square">
                    <img src={alphabet_Z} alt="alphabet_Z" style={style} />
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <Button bsStyle="info">
                {this.state.wrongAttempt <= 1 ? 'Wrong Attempt : ' : 'Wrong Attempts : '}
                {this.state.wrongAttempt}
              </Button>
            </Col>
            <Col xs={4} md={4}>
              <Button bsStyle="info">
                {this.state.counter <= 1 ? 'Total Number of Attempt : ' : 'Total Number of Attempts : '}
                {this.state.counter}
              </Button>
            </Col>
            <Col xs={4} md={4}>
              <Button bsStyle="info">
                {this.state.correctAttempt <= 1 ? 'Correct Attempt : ' : 'Correct Attempts : '}
                {this.state.correctAttempt}
              </Button>
            </Col>
          </Row>
        </div>
        <div />
        <Footer />
      </div>
    );
  }
}

//Exporting App Component
export default App;
