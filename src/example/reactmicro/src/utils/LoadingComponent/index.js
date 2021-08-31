import React from 'react';
import loading from './loading.module.css';
import { Spin } from 'antd';

export default () => {
  return (
    <div className={loading.loadingBox}>
      <Spin />
    </div>
  );
};
