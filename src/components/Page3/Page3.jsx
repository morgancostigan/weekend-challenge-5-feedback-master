import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';




class Page3 extends Component {

    state = {
        page3: 0
    }

    handleSupportChange = (event) => {
        console.log(event.target.value);
        this.setState({
            page3: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_3',
            payload: this.state.page3
        })
    }
    render() {
        return (
            <div>
                <h3>Trust fall?</h3>
                <input onChange={this.handleSupportChange} type="radio" id="support1" name="support" value="1"/>1 What, and crack my f%#!@ skull?
                <br/>
                <input onChange={this.handleSupportChange} type="radio" id="support2" name="support" value="2"/>2 I don't think you'd catch me.
                <br/>
                <input onChange={this.handleSupportChange} type="radio" id="support3" name="support" value="3"/>3 I'm on the fence.
                <br/>
                <input onChange={this.handleSupportChange} type="radio" id="support4" name="support" value="4"/>4 Let's do this.
                <br/>
                <input onChange={this.handleSupportChange} type="radio" id="support5" name="support" value="5"/>5 COWABUNGA DUDE!!!
                <br/>
                <Link to="/page2"><button>Back</button></Link>

                <Link to="/page4"><button onClick={this.handleClick}>Moving on...</button></Link>
                <br />
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

export default connect(mapStateToProps)(Page3);