import React from 'react';
import PropTypes from 'prop-types';

export class BlogPostData extends React.Component {
  render() {
    return (
      <div className="card-header">
        <h2 className="display-3">{this.props.author} wrote:</h2>
      </div>
    )
  }
}

export class BlogPostContent extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2 className="display-5">How i survived {this.props.issue}</h2>
        {this.props.isSeen && <img src={this.props.image} className="rounded mx-auto d-block img-fluid" style={{width: '40vw'}}></img>}
        <p className="lead">I almost killed myself. Putting me in that situation
            i must have been out of my mind. Is it not?
        </p>
      </div>
    )
  }
}

export class BlogPost extends React.Component {

  // the following is mandatory:
    constructor(props) {
      super(props);
      this.state = {isParagraphSeen: false}
    }

    handleClick(event) {
      this.setState({isParagraphSeen: !this.state.isParagraphSeen});
    }

  render() {
    const today = new Date();

    return (
      <div className="card">
      {this.props.children[1]}
      {this.props.children[0]}
        <div className="card-footer">
          <span className={this.props.makeBig ? "display-1" : "display-4"}>
          Published on: {today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()}
          </span>
        </div>
      </div>
    )
  }
}

BlogPostContent.propTypes = {
  city: PropTypes.string,
  image: PropTypes.string.isRequired,
  isSeen: PropTypes.bool.isRequired
}

BlogPostData.propTypes = {
  author: PropTypes.string.isRequired
}
