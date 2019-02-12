import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

class BlogForm extends React.Component{

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

export class BlogRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <div className="container mt-4">
            <ul className="nav">
              <li className="nav-item my-4 mr-3">
                <NavLink to="/dist">Home</NavLink>
              </li>
              <li className="nav-item my-4 mr-3">
                <NavLink to="/createPost">Create a Post</NavLink>
              </li>
              <li className="nav-item my-4 mr-3">
                <NavLink to="/show">Show a Post</NavLink>
              </li>
            </ul>
          </div>

          <div className="container">
            <div className="jumbotron">
              <Route path="/dist" exact render={() => <h2 className="display-3 text-center">Welcome to our Blog site!</h2>} />
              <Route path="/createPost" component= {BlogForm} />
            </div>
          </div>
        </>
      </BrowserRouter>
    )
  }
}
