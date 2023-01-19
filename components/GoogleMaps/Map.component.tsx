import { createRef, useEffect, useState } from 'react';

type MapProps = {
  latitude: number,
  longitude: number
}

function Map(props: MapProps) {
  const { latitude, longitude } = props;
  const [map, setMap] = useState<google.maps.Map|null>(null);
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new google.maps.Map(ref.current, {
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          center: {
            lat: latitude ?? 0,
            lng: longitude ?? 0,
          },
          zoom: 10,
        })
      );
    }
  }, [ref, map, latitude, longitude]);

  return <div ref={ref} className="w-full h-full"/>;
}

export default Map;