import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

const init = async () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

export default init;
