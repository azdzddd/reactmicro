import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import RouterView from "./router/index.js";
import { routes } from './router/router';
console.log('🚀 ~ file: App.js ~ line 8 ~ routqweqwewqewqeqwes', routes);
function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/a/d/reactmicro' : '/'}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {renderRoutes(routes)}
        </header>
      </div>
    </Router>
  );
}

export default App;
