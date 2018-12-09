import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class Page1 extends Component{

    state = {
        page1: 0
    }

    handleFeelingsChange = (event) => {
        console.log(event.target.value);
        
        this.setState({
            page1: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_1',
            payload: this.state.page1
        })
    }

    render() {
        return(
            <div>
                <h3>How ya doin?</h3>
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling1" name="feelings" value={1}/>1 Ugh, garbage
                <br/>
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling2" name="feelings" value={2}/>2 I've been better
                <br/>
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling3" name="feelings" value={3}/>3 Pretty a'ight
                <br/>
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling4" name="feelings" value={4}/>4 Feeling gooooood man
                <br/>
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling5" name="feelings" value={5}/>5 I'm in God Mode
                <br/>
                <button onClick={this.handleClick}><Link to="/page2">Let's talk about feelings</Link></button>
            </div>
        )
    }
}




const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Page1);