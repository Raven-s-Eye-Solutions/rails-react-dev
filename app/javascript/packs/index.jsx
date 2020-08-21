import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.createElement('div');
  rootDiv.setAttribute('id', 'root');
  document.body.appendChild(rootDiv);

  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('root')
  );
});
