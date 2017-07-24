import React, { Component } from 'react';

export default class ChildComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <button type="submit" onClick={this.props.onClick}>Click It</button>
        </div>
      </div>
    );
  }
}
