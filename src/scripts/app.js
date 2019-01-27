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

// classes in React always in upperCase / inside functions: nameFunction () {} usw. without commas
// inside classes you can not define variables... function just get names...

class App extends React.Component {

// we use the following curly braces fot evaluate javascript
  render() {

      return (
        <React.Fragment>
          < Gallery />
        </React.Fragment>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM : there can be more than one / you can write JSX inside / define entry points!!!
