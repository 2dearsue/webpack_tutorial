import '../styles/main.scss';
// import '../images/RESERVOIR_DOGS_xx.jpg';
// import '../images/RESERVOIR_DOGS_yy.jpg';
// import '../images/the-outsider.jpg';
// import '../images/zz-top.jpg';
// import '../images/the-outsiders-2.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import {BlogPostData, BlogPostContent, BlogPost} from './blog';

class Title extends React.Component {
  // react does not allow to return more than one element but you can group them
  render() {

    const framework = 'React';

    return (
      <div>
        <h3>hey hello {framework}</h3>
        <img src = "./images/RESERVOIR_DOGS_xx.jpg" width="300" height="200"></img>
      </div>
    );
  }
}

class Greet extends React.Component {
  render() {

    const name = 'Sue';

    return (
      <div>
          <h3>Hello {name}</h3>
          <img src = "./images/RESERVOIR_DOGS_yy.jpg" width="200" height="300"></img>
      </div>
    );
  }
}

class FootballPlayer extends React.Component {
 calculateGoalsRatio(caps, goals) {
   return goals / caps;
 }
 render() {
   const playerCaps = this.props.caps;
   const playerGoals = this.props.goals;
   return <h2>{this.props.firstName} {this.props.lastName} scored {this.calculateGoalsRatio(playerCaps ,playerGoals)} goals this year!</h2>;
 }
}

FootballPlayer.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  caps: PropTypes.number.isRequired,
  goals: PropTypes.number.isRequired,
}

class Conditional extends React.Component {

  render() {
    const isSeen = true;
    return isSeen && <h2>Now you see me</h2>;
  }
}

class Menu extends React.Component {

  render() {
    const foodStock = [
      {product:'Milk', quantity: 5},
      {product:'Beer', quantity: 12},
      {product:'Bread', quantity: 0},
      {product:'Sausage', quantity: 4},
    ];

    return <ul> {foodStock.map((elem, position, array) => elem.quantity > 0  && <li key={position.toString()}>{elem.product}</li>)}</ul>;
  }
}


class NavBar extends React.Component {

  render() {
    const artists = ['The Outsiders', 'ZZ Top', 'The Outsiders 2', 'Rock'];

    return  (
        <nav>
          {artists.map((artist, position) => <li key={position}><a href= {"#"+artist} > {artist} </a></li>)}
        </nav>
    );
  }
}

class InstaBox extends React.Component {

  render() {

    return (
      <section id={this.props.identifier}>
        <h3>{this.props.title}</h3>
        <img src = {this.props.imgSource} width="400" height="300"></img>
        <p>{this.props.description}</p>
      </section>
    )
  }
}

InstaBox.propTypes = {
  identifier: PropTypes.string.isRequired,
  title: PropTypes.string,
  imgSource: PropTypes.string.isRequired,
  description: PropTypes.string
}


class App extends React.Component {

  render() {

    const artistList = [
      {name: 'The Outsider', path: "./images/the-outsider.jpg", description: 'cool movie'},
      {name: 'ZZ Top', path: "./images/zz-top.jpg", description: 'cool band'},
      {name: 'The Outsider 2', path: "./images/the-outsiders-2.jpg", description: 'cool actors'},
      {name: 'Rock', path: "./images/rock-a.jpg", description: 'lets ...'}
    ];

    return (
      <React.Fragment>
        <NavBar />

        {artistList.map((line, index) => <InstaBox
                                          key={index}
                                          identifier={line.name}
                                          title={line.name}
                                          imgSource={line.path}
                                          description={line.description} />
                                      )}

        {/*
        <InstaBox identifier="The Outsider" title="The Outsider" imgSource="./images/the-outsider.jpg" description="The Outsider Movie"/>
        <InstaBox identifier="ZZ Top" title="ZZ Top" imgSource="./images/zz-top.jpg" description="ZZ Top Live"/>
        <InstaBox identifier="The Outsiders 2" title="The Outsiders-2" imgSource="./images/the-outsiders-2.jpg" description="The Outsider Movie"/>
        <InstaBox identifier="Rock" title="Rock" imgSource="./images/rock-a.jpg" description="Rock"/>
        */}

        <Title />
        <Greet />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(<Conditional />, document.getElementById('conditional'));
// ReactDOM.render(<Menu />, document.getElementById('menu'));

// ReactDOM.render(<FootballPlayer firstName="Cristiano" lastName="Ronaldo" caps={80} goals={65} />, document.getElementById('ronaldo'));
// ReactDOM.render(<FootballPlayer firstName="Lionel" lastName="Messi" caps={80} goals={65} />, document.getElementById('lio'));
// ReactDOM.render(<FootballPlayer firstName="Marco" lastName="Reus" caps={80} goals={65} />, document.getElementById('reus'));

// Webpack:
//
// 1) mode: development or production
// 2) entry - from where
// 3) module - to where
// 4) plugins
