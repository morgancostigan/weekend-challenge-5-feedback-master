import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Admin extends Component {
    render() {
        return (
            <div>
                <p>On Admin Page dummy</p>


                <button onClick={this.handleClick}><Link to="/">Back to feedback</Link></button>

            </div>
        )
    }
}


const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);