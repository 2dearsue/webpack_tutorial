import React from 'react';

export class WarmUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {usersRegistered: 0, showParagraph: false}
  }

  handleClick(event) {
    this.setState({usersRegistered: this.state.usersRegistered + 1, showParagraph: true});
    setTimeout(()=> {
    this.setState({showParagraph: false});
  }, 3000)
}

  render() {

      return (
        <React.Fragment>
          <button className="btn btn-lg btn-primary" onClick={this.handleClick.bind(this)}>
          {this.state.usersRegistered !== 0 ? 'Add another user' : 'Add the first user'}
          </button>

          <Paragraph showParagraph={this.state.showParagraph} usersRegistered={this.state.usersRegistered} />
        </React.Fragment>
      );
    }
}

class Paragraph extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

      return (
        <React.Fragment>
          {this.props.showParagraph && <p className={this.props.usersRegistered % 10 === 0 ? 'bg-success' : 'bg-warning'}>
          {this.props.usersRegistered % 10 === 0 ? `A new milestone was reached! ${this.props.usersRegistered} subscribers!` : `A new subscriber registered. We have ${this.props.usersRegistered} for now!`}
          </p>
            }
        </React.Fragment>
    );
  }
}
