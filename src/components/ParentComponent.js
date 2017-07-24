import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(e) {
    e.preventDefault();
    console.log(this.state);
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    let what = this.state.whatToSay;
    //set the state for props and for value (prevents output from appearing when typing)
    //clear our input by resetting state
    this.setState({whatToSay: '', whatWasSaid: what});

  }
  render() {
    return (
      <div>
        <form>
          <div>
            <input onChange={this.handleInput} type="text" value={this.state.value} placeholder="Say It, Don't Spray It!" />
          </div>
          <div>
            <ChildComponent onClick={this.handleSubmit}/>
            <DisplayComponent sayWhat={this.state.whatWasSaid} />
          </div>
        </form>
      </div>
    );
  }
}
