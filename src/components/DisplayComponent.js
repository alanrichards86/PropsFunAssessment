import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>

        <h2>This is what I say</h2>
        {this.props.sayWhat}



      </div>
    );
  }
}
