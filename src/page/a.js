import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function a({ route }) {
  return (
    <div>
      这是react主应用页面 <br />
      <Link to="/a/b">go-->react主用b路由</Link>
      <br />
      <Link to="/a/c">go-->react主用c路由</Link>
      <br />
      <Link to="/a/d">go-->react主用d路由</Link>
      {renderRoutes(route.routes)}
    </div>
  );
}
