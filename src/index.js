import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../styles/main.scss'
import App from './components/App';

ReactDOM.render(React.createElement(App, {}),
            document.getElementById('root') || document.createElement('div')
        );