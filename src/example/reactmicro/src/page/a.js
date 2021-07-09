import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function a({ route }) {
  return (
    <div>
      这是react微应用页面 <br />
      <Link to="/a/b">go-->微b</Link>
      <br />
      <Link to="/a/c">go-->微c</Link>
      {renderRoutes(route.routes)}
    </div>
  );
}
