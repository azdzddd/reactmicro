import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import RouterView from "./router/index.js";
import { routes } from './router/router';
function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/a/d/reactmicro' : '/'}>
      <div className="App">
        {renderRoutes(routes)}
      </div>
    </Router>
  );
}

export default App;
