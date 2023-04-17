import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/common.scss';
import './index.scss';
import Main from './main';
import Skills from './skills';
import Works from './works';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main></Main>
    <div className='content'>
      <Skills></Skills>
      <Works></Works>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
