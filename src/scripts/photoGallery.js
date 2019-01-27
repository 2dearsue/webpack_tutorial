import React from 'react';
import { photoData } from './photoData';

export class PhotoGallery extends React.Component{

  constructor(props) {
  super(props);
  this.state = {shownPhotos: photoData};
  }

  showAll() {
    this.setState({shownPhotos: photoData});
  }

  showBrasil() {
    this.setState({shownPhotos: photoData.filter(photo => photo.category === 'Brasil')})
  }

  showFruits() {
    this.setState({shownPhotos: photoData.filter(photo => photo.category === 'Fruit')})
  }

  showAustria() {
    this.setState({shownPhotos: photoData.filter(photo => photo.category === 'Austria')})
  }

  render() {

    return (
      <div className="container">
        <button className="btn btn-lg btn-dark text-white" onClick={this.showAll.bind(this)}>Show All</button>
        <button className="btn btn-lg btn-light" onClick={this.showBrasil.bind(this)}>Show Brasil</button>
        <button className="btn btn-lg btn-dark text-white" onClick={this.showFruits.bind(this)}>Show Fruits</button>
        <button className="btn btn-lg btn-light" onClick={this.showAustria.bind(this)}>Show Austria</button>

        <div className="row">
          {this.state.shownPhotos.map((photo, index) =>
            <img
              style={{height: '30vw'}}
              src={photo.source}
              key={index}
              className="col-lg-4 col-md-8" />)}
        </div>

      </div>
    )
  }
}
