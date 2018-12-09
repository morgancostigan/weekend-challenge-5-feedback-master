import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class Page4 extends Component {

    state = {
        page4: '',
        flag: false
    }

    handleCommentChange = (event) => {
        console.log(event.target.value);
        this.setState({
            page4: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'ADD_4',
            payload: this.state.page4
        })
    }
    render() {
        return (
            <div>
                <h3>Any last words?</h3>
                <input onChange={this.handleCommentChange} placeholder="Colorful Commentary" value={this.state.page4} name="comment" />
                <br/>
                <button onClick={this.handleClick}><Link to="/">The end is the beginning</Link></button>
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