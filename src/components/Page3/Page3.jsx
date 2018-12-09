import React, { Component } from 'react';
import axios from 'axios';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Page3 extends Component {
    render() {
        return (
            <div>
                <h3>Trust fall?</h3>
                {/* <input onChange={this.handleFeelingsChange} type="radio" id="feeling1" name="feelings" value="true" checked={this.state.page1 === 1} />1 - Ugh, garbage
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling2" name="feelings" value="true" checked={this.state.page2 === 2} />2 - I've been better
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling3" name="feelings" value="true" checked={this.state.page3 === 3} />3 - Pretty a'ight
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling4" name="feelings" value="true" checked={this.state.page4 === 4} />4 - Feeling gooooood man
                <input onChange={this.handleFeelingsChange} type="radio" id="feeling5" name="feelings" value="true" checked={this.state.page5 === 5} />5 - I'm in God-Mode */}
                <button onClick={this.handleClick}><Link to="/page4">Next</Link></button>


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