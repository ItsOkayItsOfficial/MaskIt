import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import { Login } from './pages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));

// For offline/faster load change unregister() to register()  http://bit.ly/CRA-PWA
serviceWorker.unregister();