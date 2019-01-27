import React from 'react';

export class NavBar extends React.Component {

  render() {
    const artists = ['The Outsiders', 'ZZ Top', 'The Outsiders 2', 'Rock'];

    return  (
        <nav>
          {artists.map((artist, position) => <li key={position}><a href= {"#"+artist} > {artist} </a></li>)}
        </nav>
    );
  }
}
