import React, { Component } from 'react';

class Photo extends Component {
  render() {
    return (
      <div>
        <img
          src={
            this.props.source[0] ||
            'https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00990/opgs/edr/fcam/FRB_485373416EDR_F0480458FHAZ00323M_.JPG'
          }
          alt="mars landscape"
        />
      </div>
    );
  }
}

export default Photo;
