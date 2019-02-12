import React from 'react';

export class UserButton extends React.Component{

  constructor(props) {
  super(props);
  this.state = {}

  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState={}
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    return (
      <React.Fragment>
        <form>
          <div className="input-group mb-3 input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text">Put your name:</span>
            </div>
            <input
              type="text" className="form-control" placeholder="Name"
              value={this.state.value}
              onChange={this.handleChange} />
          </div>
        </form>

        <button
          className="btn btn-lg btn-light m-2"
          onClick={this.handleClick} > Add the first user
        </button>
      <React.Fragment>
      )
  }
}
