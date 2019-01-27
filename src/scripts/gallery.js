import React from 'react';

const tabs = [
  {group:'All'},
  {group: 'Brasil'},
  {group: 'Fruit'},
  {group: 'Austria'}
];

const images = [
  {group: 'Brasil', source: 'https://cdn.pixabay.com/photo/2019/01/09/19/09/scarlet-macaw-tropical-bird-3924046_1280.jpg'},
  {group: 'Brasil', source: 'https://cdn.pixabay.com/photo/2016/11/23/15/15/atlantic-1853445_1280.jpg'},
  {group: 'Brasil', source: 'https://cdn.pixabay.com/photo/2017/05/31/10/19/rio-2359870_1280.jpg'},
  {group: 'Fruit', source: 'https://cdn.pixabay.com/photo/2016/11/23/15/20/fruit-1853466_1280.jpg'},
  {group: 'Fruit', source: 'https://cdn.pixabay.com/photo/2016/04/24/19/41/strawberries-1350482_1280.jpg'},
  {group: 'Fruit', source: 'https://cdn.pixabay.com/photo/2016/07/30/10/51/apricot-1556851_1280.jpg'},
  {group: 'Austria', source: 'https://cdn.pixabay.com/photo/2013/10/31/13/42/cows-203460_1280.jpg'},
  {group: 'Austria', source: 'https://cdn.pixabay.com/photo/2016/11/30/15/07/winter-1873017_1280.jpg'},
  {group: 'Austria', source: 'https://cdn.pixabay.com/photo/2018/01/20/17/07/alm-3094974_1280.jpg'}
];

let brasilFilter = [];
let fruitFilter = [];

export class Gallery extends React.Component {

  constructor (props) {
    super(props);
    this.state = {AllPhotos: images, AllTabs: tabs}

      this.handleClick = this.handleClick.bind(this);
      }

  handleClick(ev) {
    if (ev.target.getAttribute('group') === 'All') {
      this.setState({AllPhotos: images})
    }
    if (ev.target.getAttribute('group') === 'Brasil') {
      brasilFilter = images.filter(value => value.group === ev.target.getAttribute('group'));
      this.setState({AllPhotos: brasilFilter})
    }
    if (ev.target.getAttribute('group') === 'Fruit') {
      fruitFilter = images.filter(value => value.group === ev.target.getAttribute('group'));
      this.setState({AllPhotos: fruitFilter})
    }
  }

    render() {
      return (

        <React.Fragment>
          <div>
              <ul className="nav nav-tabs nav-justified">
                {this.state.AllTabs.map((tab, index) =>
                  <li
                    key={index}
                    group={tab.group}
                    className="nav-item"
                    onClick={this.handleClick} > {tab.group}
                  </li>
                )}
              </ul>
         </div>

          <div className="mx-auto">
            {this.state.AllPhotos.map((photoArray, index) =>
              <img
                key={index}
                src={photoArray.source}
                group={photoArray.group}
                className="img-fluid m-3" width="300" height="200" />
            )}
          </div>
        </React.Fragment>

      );
  }
}


// <div>
//   <ul className="nav nav-tabs nav-justified">
//     <li className="nav-item">
//       <a
//         value={this.state.value}
//         className="nav-link active"
//         href="#"></a>
//     </li>
//   </ul>
// </div>

// <div className="container p-3">
//   <div className="row">
//     <GalleryImage
//       className="rounded img-fluid"
//       style={{width: '40vw', height: 'auto'}}
//       source="https://cdn.pixabay.com/photo/2019/01/09/19/09/scarlet-macaw-tropical-bird-3924046_1280.jpg" />
//   </div>
// </div>
