import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerMicroApps([
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7104/entry.js'] },
  //   container: '#containerB',
  //   activeRule: '/containerB',
  // },
  {
    name: 'purehtml',
    entry: '//localhost:7104',
    container: '#containerB',
    activeRule: '/a/b/purehtml',
  },
]);

start();
