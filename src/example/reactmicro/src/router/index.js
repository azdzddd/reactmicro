import React from 'react';
import { Route } from 'react-router-dom';
const RouterView = (props) => {
  return props.routes.map((item, index) => {
    return (
      <Route
        key={index}
        path={item.path}
        render={(routerPrpos) => {
          if (item.children) {
            return <item.component {...routerPrpos} routes={item.children} />;
          } else {
            return <item.component {...routerPrpos} routes={item.children} />;
          }
        }}
      />
    );
  });
};

export default RouterView;
