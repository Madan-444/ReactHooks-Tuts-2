import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import App from './App';
// import ColorLoadMore from '../src/UseReducer Practice Folder/ColorLoadMore'
import * as serviceWorker from './serviceWorker';
import App2 from './UseReducer Practice Folder/App2';

ReactDOM.render(<App2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
