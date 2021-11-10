'use script';

import React from "react";

class Pokemon extends React.Component {
  render() {
    let poketypeHTML = '';
    if (this.props.data.PokeTypes.length === 1) {
      poketypeHTML = <div className="mb-0">
      <span className="has-text-weight-bold 0">PokeType: </span>
      <span>{this.props.data.PokeTypes[0].Name}</span>
    </div>;
    } else {
      poketypeHTML = <div className="mb-0">
      <span className="has-text-weight-bold 0">PokeTypes: </span>
      <span>{this.props.data.PokeTypes[0].Name} / {this.props.data.PokeTypes[1].Name}</span>
    </div>;
    }

    return (
      <div className="column is-2">
        <div className="card has-text-black" style={{backgroundColor: this.props.data.Color}}>
          <div className="card-image">
            <figure className="image is-square">
              <img src={this.props.data.ImgURL} alt={this.props.data.Name}/>
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
                <p className="title is-3 has-text-centered"> {this.props.data.Name}</p>
            </div>

            <div className="mb-0">
            <span className="has-text-weight-bold">Species: </span>
            <span>{this.props.data.Species.Name}</span>
          </div>
          <div className="mb-0">
            <span className="has-text-weight-bold">Habitat: </span>
            <span>{this.props.data.Habitat.Name}</span>
          </div>

          <div className="mb-0">
            {poketypeHTML}
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pokemon;
