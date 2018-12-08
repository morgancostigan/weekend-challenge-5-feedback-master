import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Admin from '../Admin/Admin'



class App extends Component {

  componentDidMount(){

  }//end componentDidMount

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Admin />
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(App);
