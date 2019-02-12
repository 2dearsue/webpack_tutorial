import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './navbar';
import { BlogPostData, BlogPostContent, BlogPost } from './blog';
import { ActorCard } from './actors';
import { InputField } from './inputField';
import { UserButton } from './button';
import { WarmUp } from './warmUp';
import { Gallery } from './gallery';
import { PhotoGallery } from './photoGallery';
import { FormClass } from './taskList';
import { FormInput, ShowUserInfo } from './passingData';
import { FishRouting } from './fishRouting';
import { BlogForm } from './blogRoute';

// classes in React always in upperCase / inside functions: nameFunction () {} usw. without commas
// inside classes you can not define variables... function just get names...

class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {userName : '', blogTitle: '', blogText: ''}
    }


// we use the following curly braces fot evaluate javascript
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
                <Route path="/createPost" render={() => <BlogForm
                    userName = ""
                  /> />
              </div>
            </div>
          </>
        </BrowserRouter>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM : there can be more than one / you can write JSX inside / define entry points!!!

// would go inside return
//           < FormInput />
//          < ShowUserInfo name={this.state.inputVal} />
