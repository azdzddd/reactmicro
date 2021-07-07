import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import RouterView from "./router/index.js";
import { routes } from './router/router';

export default function App() {
  return (
    <div>
      <Router>
        {/* <RouterView routes={routes}/> */}
        {renderRoutes(routes)}
      </Router>
    </div>
  );
}
