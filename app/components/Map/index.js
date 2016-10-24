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

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL,
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT,
    },
    mapTypeControl: true,
    styles: fancyMapStyles,
  };
}

function Map({ center, zoom }) {
  return (
    <GoogleMap
      className={styles.map}
      apiKey={GOOGLE_API_KEY}
      center={center}
      zoom={zoom}
      options={createMapOptions}
    />
  );
}

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  center: [42.998124, -73.8437357],
  zoom: 9,
};


export default Map;
