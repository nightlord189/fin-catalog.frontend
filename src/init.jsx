import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const init = async () => {
    ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default init;
