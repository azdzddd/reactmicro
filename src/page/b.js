import React from 'react';
import { Link } from 'react-router-dom';
import './b.css';

export default function b() {
  return (
    <div>
      这是b页面
      <Link to="/a/b/purehtml">to render purehtml</Link>
      <div id="containerB"></div>
    </div>
  );
}
