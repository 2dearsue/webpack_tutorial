import React from 'react';

export class UserButton extends React.Component{

  constructor(props) {
  super(props);
  this.state = {
    counter : 0,
    visible : false
    }
  }

  handleClick(event) {
    this.setState({
      counter : this.state.counter + 1,
      visible : true
     })

     setTimeout (() => {
       this.setState({visible: false});
    }, 2000);
  }

  render() {

    return (
      <React.Fragment>
        <button
          className="btn btn-lg btn-light m-2 border-dark"
          onClick={this.handleClick.bind(this)}>
          {this.state.counter > 0 ? 'Add another user' : 'Add a first user'}
        </button>

        {this.state.visible && <p
          className={this.state.counter%10===0 ? `lead m-2 bg-warning` : `lead m-2 bg-info`}>
          {this.state.counter%10===0 ? `We have reached a landmark, ${this.state.counter} subscribers so far.` : `We have ${this.state.counter} subscribers so far.`}
        </p>}
      </React.Fragment>
    )
  }
}
