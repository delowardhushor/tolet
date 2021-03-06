import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Home from './Home';
import Settings from './Settings';

import * as serviceWorker from './serviceWorker';

import {BrowserRouter,Route} from 'react-router-dom';


ReactDOM.render(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} /> 
                <Route path="/home" component={Home} />
                <Route path="/settings" component={Settings} />
            </div>
        </BrowserRouter>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
