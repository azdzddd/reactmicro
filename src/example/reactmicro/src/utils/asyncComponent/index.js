import React from 'react';
import Spin from '../LoadingComponent';

export default function asyncComponent(loadComponent) {
  return class extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        UsingComponent: null,
      };
      this.ifHasUsingComponent = this.ifHasUsingComponent.bind(this);
    }
    componentDidMount() {
      if (this.ifHasUsingComponent()) return;

      loadComponent()
        .then((module) => (module.default ? module.default : module))
        .then((UsingComponent) => {
          setTimeout(() => {
            this.setState({
              UsingComponent,
            });
          }, 200);
        });
    }

    ifHasUsingComponent() {
      return this.state.UsingComponent !== null;
    }

    render() {
      const { UsingComponent } = this.state;

      return UsingComponent ? <UsingComponent {...this.props} /> : <Spin />;
    }
  };
}
