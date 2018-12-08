import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';

class Page2 extends Component {
    render() {
        return (
            <div>
                <p>On Page 2 dummy</p>

            </div>
        )
    }
}


const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Page2);