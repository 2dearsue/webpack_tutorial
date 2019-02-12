import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.setDone = this.setDone.bind(this);
    this.closeButton = this.closeButton.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {inputVal: '', tasks: [], isDuplicate: false, emptyValue: false};
  }

  updateValue(event) {
    this.setState({inputVal: event.target.value})
  }

  addTask(event) {
    event.preventDefault();
    const temporaryTasks = [...this.state.tasks]; // spread operator siehe unten EC6 Destructuring

    if (temporaryTasks.includes(this.state.inputVal)) {
      this.setState({isDuplicate: true, emptyValue: false});
      return false;

    } if(!this.state.inputVal.length) { // or (this.state.inputVal === '')
      this.setState({emptyValue : true, isDuplicate: false});
      return false;
    }
    temporaryTasks.push(this.state.inputVal);
    this.setState({tasks: temporaryTasks, inputVal: '', isDuplicate: false, emptyValue: false});
  }

  setDone(event) {
    event.target.parentElement.classList.toggle('strike');
  }

  closeButton(event) {
    this.setState({isDuplicate: false, emptyValue: false});
  }

  deleteTask(event) {
    const parentOfDeleteButton = event.target.parentElement;
    const parentText = parentOfDeleteButton.getAttribute('text');
    const tempTasks = [...this.state.tasks];
    delete tempTasks[tempTasks.indexOf(parentText)];
    this.setState({tasks: tempTasks});
  }

  render() {
    return (
  <React.Fragment>
      <form onSubmit={this.addTask}>
        <div className="input-group mb-3 input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text">Write your task here:</span>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={this.updateValue}
            value={this.state.inputVal}  />
          <button className="btn btn-light" type="submit">Submit</button>
        </div>
      </form>

      {this.state.isDuplicate &&
        <div
          className="alert alert-danger alert-dismissable">
            <button type="button" className="close"
            onClick={this.closeButton}>&times;</button>
            <strong>Careful!</strong> ... you have created the same task like before!
        </div>}

      {this.state.emptyValue &&
        <div
          className="alert alert-danger alert-dismissable">
            <button type="button" className="close"
            onClick={this.closeButton}>&times;</button>
            <strong>Careful!</strong> ... you should define a task!
        </div>}

    <div className="container">
      < TransitionGroup component="ul" className="list-group mb-3">
      {this.state.tasks.map((taskDescription, index) => {
        return (
          <CSSTransition key={index} classNames="bouncer" timeout={400} >
            <React.Fragment>
              {taskDescription && <li
                text={taskDescription}
                key={index} > {taskDescription}
                <button
                  className="btn btn-dark float-right m-3"
                  onClick={this.setDone}
                  >Done!</button>
                <button
                  className="btn btn-danger float-right m-3"
                  onClick={this.deleteTask}
                  >Delete!</button>
              </li>}
            </React.Fragment>
          </CSSTransition>
          )
        })
      }
      </TransitionGroup >
    </div>
  </React.Fragment>
    )
  }
}

// objects are passed by reference (pointer) not by inputValue /
// const jenshobbies = ['coding', 'beer']
// spread operator const jakehobbies = [...jenshobbies] // not jakehobbies = jenshobbies!!!]

// spread operator
// const nums = [2, 5, 8];

// function add(a,b,b) {
//  return ab + b + c;
//}

// add (nums) = not possible because 1 argument instead of 3 accepted by fkt
// add (...nums) = it works and takes 2, 5, 8
