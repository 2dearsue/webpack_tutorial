import React from 'react';

export class FormInput extends React.Component{

  constructor(props) {
    super(props);
    this.state = {inputVal: ''};
  }

  updateValue(event) {
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
              type="text" className="form-control"
              onChange={this.updateValue.bind}
              value={this.state.inputVal}/>
          </div>
        </form>

      <ShowUserInfo name={this.state.inputVal} />

      </React.Fragment>
      )
  }
}

export class ShowUserInfo extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <p className="lead">Hello ${this.props.inputVal}</p>
      </div>
    )
  }
}
