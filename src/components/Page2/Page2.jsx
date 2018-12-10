import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';



class Page2 extends Component {

    state = {
        page2: 0
    }

    handleBrainsChange = (event) => {
        console.log(event.target.value);
        this.setState({
            page2: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_2',
            payload: this.state.page2
        })
    }

    render() {
        return (
            <div>
                <h3>Is yr brain on board?</h3>
                <input onChange={this.handleBrainsChange} type="radio" id="brains1" name="brains" value={1} />1 Nah brah, my brain is gobbledygook.
                <br />
                <input onChange={this.handleBrainsChange} type="radio" id="brains2" name="brains" value={2} />2 It's not.
                <br />
                <input onChange={this.handleBrainsChange} type="radio" id="brains3" name="brains" value={3} />3 I think I see a break in the haze.
                <br />
                <input onChange={this.handleBrainsChange} type="radio" id="brains4" name="brains" value={4} />4 Smarty-pants
                <br />
                <input onChange={this.handleBrainsChange} type="radio" id="brains5" name="brains" value={5} />5 Enlightened
                <br />
                <Link to="/"><button>Back</button></Link>
                <Link to="/page3"><button onClick={this.handleClick}>Moving on...</button></Link>
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

export default connect(mapStateToProps)(Page2);