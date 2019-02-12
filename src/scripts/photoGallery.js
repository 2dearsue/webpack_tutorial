import React from 'react';
import { photoData } from './photoData';
import { buttonData as allButtons, uniqueClasses } from './buttonData';

export class PhotoGallery extends React.Component {

  constructor(props) {
  super(props);
  this.state = {shownPhotos: photoData};
  //
  // showBrasil() { this.setState({shownPhotos: photoData.filter(photo => photo.category === 'Brasil')}) }
  // showFruits() { this.setState({shownPhotos: photoData.filter(photo => photo.category === 'Fruit')}) }
  // showAustria() { this.setState({shownPhotos: photoData.filter(photo => photo.category === 'Austria')}) }
  // showAll() { this.setState({shownPhotos: photoData});
}

  filterBy (group) {
    if (group === 'All') {
      this.setState({shownPhotos : photoData});
    } else {
      this.setState({shownPhotos: photoData.filter(photo => photo.category === group)});
    }
  }

  filterImages (ev) {
    const targetElementIdentifier = ev.target.getAttribute('identifier'); // in case of click on fruits = fruits
    this.filterBy(targetElementIdentifier); // fruits
  }

  render() {

    return (
        <React.Fragment>
          <div className="container">
            {allButtons.map((button, index) =>
              <button
                key = {index}
                identifier = {button.identifier}
                className = {['btn', 'm-2', uniqueClasses[index]].join(' ')}
                onClick = {this.filterImages.bind(this)} > {button.text}
              </button>
            )}
          </div>
          <RenderImages shownPhotos={this.state.shownPhotos} />
        </React.Fragment>
    )
  }
}

// functional stateless component

const RenderImages = props => {

    return (
      <div className="row">
        {props.shownPhotos.map((photo, index) =>
          <img
            style = {{height: '30vw', width: '50vw', fontFamily: 'Tahoma'}}
            src = {photo.source}
            key = {index}
            className="m-1 col-lg-4 col-md-5" /> )}
      </div>

    )
  }
