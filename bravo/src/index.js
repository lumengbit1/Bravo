import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore,applyMiddleware} from "redux";
import eventList from "./reducers/reducer";
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(eventList,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

