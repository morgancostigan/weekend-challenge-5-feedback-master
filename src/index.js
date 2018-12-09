import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'; // shows more detail in console


const feedbackList = (state = {
    page1: 0,
    page2: 0,
    page3: 0,
    page4: ''
}, action) => {  //state assigned zero values to start
    switch (action.type) {
        case 'ADD_1':
            return {...state, page1: action.payload}
        case 'ADD_2':
            return { ...state, page1: action.payload }
        case 'ADD_3':
            return { ...state, page1: action.payload }
        case 'ADD_4':
            return { ...state, page1: action.payload }
        default:
            return state
    }
}// end feedbackList reducer


const storeInstance = createStore(
    combineReducers({
        feedbackList
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
