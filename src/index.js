import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Root from './Root';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
