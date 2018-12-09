import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class Page4 extends Component {
    render() {
        return (
            <div>
                <h3>Any last words?</h3>


                <button onClick={this.handleClick}><Link to="/">Next</Link></button>
            </div>
        )
    }
}


const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Page4);