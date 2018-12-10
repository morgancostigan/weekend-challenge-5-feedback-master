import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';



class Page4 extends Component {

    state = {
        page4: '',
        flag: false
    }

    handleCommentChange = (event) => {
        // console.log(event.target.value); 
        this.setState({
            page4: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_4',
            payload: this.state
            
        })
    }

    handleFlaggerChange = (event) => {
        this.setState({
            flag: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Any last words?</h3>
                <input onChange={this.handleCommentChange} placeholder="Colorful Commentary" value={this.state.page4} name="comment" />
                <br/>
                <Link to="/page3"><button>Back</button></Link>
                <button onClick={this.handleClick}>Is that yr final answer?</button>
                <br />
                <input onChange={this.handleFlaggerChange} type="checkbox" name="flagger" value="true"/>You want we should come and has talk?
                <br />
                <br />
                <br />
                <Feedback />
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