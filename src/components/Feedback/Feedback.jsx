import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Feedback extends Component {

    sendFeedbackToDB = () => {
        console.log('sending to DB', this.props.reduxStore.feedbackList);

    }
    
    render() {
        return (
            <div>
                <h3>Yr stats so far dawg:</h3>
                <p>Feelings: {this.props.reduxStore.feedbackList.page1}</p>
                <p>Understanding: {this.props.reduxStore.feedbackList.page2}</p>
                <p>Supported: {this.props.reduxStore.feedbackList.page3}</p>
                <p>Comments: {this.props.reduxStore.feedbackList.page4}</p>
                <button onClick={this.sendFeedbackToDB}>Send It</button>
            </div>
        )
    }
}




const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Feedback);