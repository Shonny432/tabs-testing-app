import React, { Component, PropTypes } from 'react';


export default class Tab extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active && !this.props.active) {
      alert(this.props.name);
    }
  }
  render() {
    return (
      <div className={!this.props.active ? 'hidden' : ''}>
        {this.props.children}
      </div>
    );
  }
}
