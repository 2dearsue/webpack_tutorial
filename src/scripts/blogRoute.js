import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

export class BlogForm extends React.Component{

  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="jumbotron">
           <h3 className="display-3">Your Blog Post</h3>
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Username
                  </span>
                </div>
                <input type="text" className="form-control" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Blog Title
                  </span>
                </div>
                <input type="text" className="form-control"
                      onChange={inputVal}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Blog Text</span>
                </div>
                <textarea type="text" className="form-control" />
              </div>

              <button className="btn btn-secondary" type="submit">Create a Post</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}
