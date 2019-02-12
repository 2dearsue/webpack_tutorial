import React from 'react';

export class TaskList extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    tasks: [],
    inputValue: ''
      };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.updateValue = this.updateValue.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault(); // wofür?
    const taskItems = [...this.state.tasks]; //[...this.state.tasks];
    taskItems.push(this.state.inputValue);
    this.setState({
      tasks: taskItems,
      inputValue: ''});
  }

  updateValue (event) {
    this.setState({inputValue: event.target.value});
  }

  render() {

    return (
      <React.Fragment>

        <form
          onSubmit={this.handleSubmit} >

          <div className="input-group mb-3">

            <div className="input-group-prepend">
              <span className="input-group-text"> Write your task here! </span>
            </div>

            <input
              type="text"
              value={this.state.inputValue}
              className="form-control"
              onChange={this.updateValue}
               />
          </div>
        </form>

        <button
          className="btn btn-light"
          type="submit" > Create
        </button>

        <Task inputValue={this.state.tasks}/>

      </React.Fragment>
    );
  }
}

export class Task extends React.Component {
  render() {
    return (
      <div
        className="card">

        <div className="card-body">
          {this.props.inputValue.map((task, index) => <li key = {index} className="list-group-item"> {task}</li>)}
          <button type="submit" className="btn btn-success">Done!</button>
          <button type="submit" className="btn btn-secondary">Delete this!</button>
        </div>

      </div>
    )
  }
}
