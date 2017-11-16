import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

require('../../twitter-api')()


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
