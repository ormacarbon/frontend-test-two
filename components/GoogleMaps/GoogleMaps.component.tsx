import {Wrapper} from '@googlemaps/react-wrapper';
import Map from './Map.component';
import { GOOGLE_MAPS_KEY } from './GoogleMaps.config';

type GoogleMapsType = {
  latitude: number,
  longitude: number
}

function GoogleMaps(props: GoogleMapsType) {
  const { latitude, longitude } = props;

  return (
    <Wrapper apiKey={ GOOGLE_MAPS_KEY }>
      <Map latitude={ latitude } longitude={ longitude } />
    </Wrapper>
  );
}

export default GoogleMaps;