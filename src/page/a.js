import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function a({ route }) {
  console.log('route', route);
  return (
    <div>
      这是a页面 <br />
      <Link to="/a/b">go-->b</Link>
      <br />
      <Link to="/a/c">go-->c</Link>
      {renderRoutes(route.routes)}{' '}
    </div>
  );
}
