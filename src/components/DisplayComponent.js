import React, { Component } from 'react';
import '../styles/displayComponent.css';

export default class DisplayComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>

        <h2>This is what I say</h2>
        <p>{this.props.sayWhat}</p>



      </div>
    );
  }
}
