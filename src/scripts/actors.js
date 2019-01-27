import React from 'react';
import PropTypes from 'prop-types';

export class ActorCard extends React.Component {
  render() {

    return (
      <div className="card col-lg-3 col-md-5 col-xs-12 mx-auto text-center">

        <div className="card-header bg-dark text-white">
          <h4 className = "title">{this.props.actor}</h4>
        </div>

        <ActorCardImage source={this.props.source} ></ActorCardImage>

        <div className="card-footer bg-light">
          <p className="lead">{this.props.text}</p>
        </div>

      </div>
      )
    }
}

export class ActorCardImage extends React.Component {
  render() {

        return (
          <div className="card-body">
            <img src={this.props.source} className="rounded img-fluid" style={{width: '40vw', height: 'auto'}}></img>
          </div>
        )
      }

}

ActorCard.propTypes = {
  actor: PropTypes.string.isRequired,
  text: PropTypes.string
}

ActorCardImage.propTypes = {
  source: PropTypes.string.isRequired
}
