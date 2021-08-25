import React from 'react';

export default function asyncComponent(loadComponent) {
  return class AsyncComponent extends React.Component {
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
          this.setState({
            UsingComponent,
          });
        });
    }

    ifHasUsingComponent() {
      return this.state.UsingComponent !== null;
    }

    render() {
      const { UsingComponent } = this.state;
      return UsingComponent ? <UsingComponent {...this.props} /> : <div> loading</div>;
    }
  };
}
