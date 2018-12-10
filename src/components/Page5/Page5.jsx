import React, { Component } from 'react';
import '../App/App';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Page5 extends Component {

    state = {
        page1: 0,
        page2: 0,
        page3: 0,
        page4: '',
        flag: false
    }

    handleClick = () => {
        this.setState({
            page1: 0,
            page2: 0,
            page3: 0,
            page4: '',
            flag: false
        })
        this.props.dispatch({
            type: 'RESET_VALUES',
            payload: this.state
        })
    }

    render(){
        return(
            <div>
                <h4>Thanks for that.  We pinkie swear we take it seriously.</h4>
                <Link to="/"><button onClick={this.handleClick}>Again?</button></Link>

            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Page5);