import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Feedback extends Component {
    render() {
        return (
            <div>
                <h3>On Feedback Page dummy</h3>
                <p>{this.props.page1}</p>



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