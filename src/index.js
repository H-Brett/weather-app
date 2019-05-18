import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Tachyons from 'tachyons';
import * as serviceWorker from './serviceWorker'; 

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register(); 

