import React from 'react';

export class InputField extends React.Component {

  constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    // good position to put / for every handler a corresponding bind
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }


    render() {
      return (
        <React.Fragment>

          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Put your name here:</span>
              </div>
              <input
                type="text" className="form-control" placeholder="Name"
                value={this.state.value}
                onChange={this.handleChange} />
            </div>
          </form>

          <Text value={this.state.value}/>
        </React.Fragment>
      );

  }
}

class Text extends React.Component {

  render () {
    return (
      <p className="bg-light border-dark display-3">
        {this.props.value.length === 0 ? 'Please put something there!' : `Sue is typing: ${this.props.value}`}</p>
    )
  }
}

// you could put the bind also inside the element part inside the return
// onChange={this.handleChange.bind(this)}
// or put this in the constructor
