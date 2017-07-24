import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import ParentComponent from './ParentComponent';
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <p>Hi</p>
        </BaseLayout>
        <ParentComponent />
      </div>
    );
  }
}

export default App;
