import React, { Component } from "react";

class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    const { show } = this.props;
    return (
      <div>
        {show({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    );
  }
}

export default Toggle;
