import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

class DepictSpecificInfoFish extends React.Component {
  render() {
    return <p className="lead">Info about {this.props.match.params.fishtype}</p>;
  }
}

class SubNav extends React.Component{
  render() {
    return (
      <>
        <h2 className="display-1 text-center">Select your Fish</h2>

        <ul className="nav mb-1">
          <li className="nav-item mr-3">
            <NavLink to="/fishes/bacalao">Bacalao</NavLink>
          </li>

          <li className="nav-item mr-3">
            <NavLink to="/fishes/salmon">Salmon</NavLink>
          </li>

          <li className="nav-item mr-3">
            <NavLink to="/fishes/tuna">Tuna</NavLink>
          </li>
        </ul>

        <div className="justify-content-center mt-5">
          <Route path="/fishes/:fishtype" render={({match}) => <DepictSpecificInfoFish match={match}/>}/>
        </div>
    </>
    )
  }
}


export class FishRouting extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <ul className="nav m-3">
            <li className="nav-item m-3">
              <NavLink to="/dist">Show Home</NavLink>
            </li>

            <li className="nav-item m-3">
              <NavLink to="/fishes">The Fishes</NavLink>
            </li>
          </ul>
          <div className="container">
            <div className="jumbotron bg-light justify-content-center rounded">
              <Route path="/dist" exact render={() => <h2 className="display-1 text-center">Home</h2>} />
              <Route path="/fishes" component = {SubNav}/>
            </div>
          </div>
        </>
      </BrowserRouter>
      )
    }
}
