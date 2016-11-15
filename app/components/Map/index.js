/**
*
* Map
*
*/

import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';


import {
  GOOGLE_API_KEY,
} from 'containers/App/keys';

import fancyMapStyles from './fancyMapStyles.json';

const DEFAULT_LAT_LONG = [43.00664, -73.872088];

function Map({ center, zoom, styles }) {
  return (
    <GoogleMap
      bootstrapURLKeys={{
        key: GOOGLE_API_KEY,
      }}
      center={center}
      zoom={zoom}
      options={{ styles }}
    />
  );
}

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  styles: PropTypes.array,
};

Map.defaultProps = {
  center: DEFAULT_LAT_LONG,
  zoom: 9,
  styles: fancyMapStyles,
};

export default Map;
