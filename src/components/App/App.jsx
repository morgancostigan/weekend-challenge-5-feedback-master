import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Admin from '../Admin/Admin';
import Feedback from '../Feedback/Feedback';



class App extends Component {

  componentDidMount(){

  }//end componentDidMount

  sendFeedbackToDB

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route path="/" exact component={Page1} /> 
          <Route path="/Page2" exact component={Page2} /> 
          <Route path="/Page3" exact component={Page3} /> 
          <Route path="/Page4" exact component={Page4} /> 
          <Route path="/Admin" exact component={Admin} /> 
          <Route path="/Feedback" exact component={Feedback} />
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(App);
