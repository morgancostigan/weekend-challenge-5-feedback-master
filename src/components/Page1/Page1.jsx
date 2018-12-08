import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';


class Page1 extends Component{
    render() {
        return(
            <div></div>
        )
    }
}




const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Page1);