import React from 'react';
import { renderRoutes } from 'react-router-config';

import './b.css';

export default function b({ route }) {
  return (
    <div>
      没错,这是react微应用b路由页面
      {/* <Link to="/a/b/purehtml">点击渲染原生html页面</Link> */}
      {/* <div id="containerB"></div> */}
      {renderRoutes(route.routes)}
    </div>
  );
}
