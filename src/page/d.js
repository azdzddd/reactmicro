import React from 'react';
import { Link } from 'react-router-dom';

export default function d() {
  return (
    <div>
      这是d路由页面
      <Link to="/a/d/reactmicro">点击渲染react微应用</Link>
      <div id="containerD"></div>
    </div>
  );
}
