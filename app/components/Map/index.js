/**
*
* Map
*
*/

import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';

import {
  GOOGLE_API_KEY,
} from 'containers/App/constants';

import fancyMapStyles from './fancyMapStyles.json';

import styles from './styles.css';

function Map({ center, zoom, mapStyle = fancyMapStyles }) {
  return (
    <GoogleMap
      bootstrapURLKeys={{
        key: GOOGLE_API_KEY,
      }}
      className={styles.map}
      center={center}
      zoom={zoom}
      options={{ styles: mapStyle }}
    />
  );
}

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  mapStyle: PropTypes.any,
};

Map.defaultProps = {
  center: [42.9976638, -73.8899404],
  zoom: 9,
};

export default Map;
