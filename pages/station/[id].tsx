import { useRouter } from 'next/router';
import useRadio from '../../hooks/useRadio';
import React, { useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { Station } from 'radio-browser-api';
import GoogleMaps from '../../components/GoogleMaps';
import Empty from '../../components/Empty';
import StationControls from '../../components/StationControls';
import { IconRadio } from '@tabler/icons';
import Tag from '../../components/Tag';

function StationDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, station, getStationDetails } = useRadio();

  useEffect(() => {
    if(typeof window === 'undefined')
      return;
    getStationDetails(typeof id === 'string' ? id : '');
  }, []);

  function renderLoading() {
    return <div className="w-full flex justify-center">
      <CircularProgress/>
    </div>;
  }

  function renderEmpty() {
    return <Empty title="No details" caption="We coun't retreive the station details right now, try again later"/>;
  }

  function renderFavIcon() {
    const { favicon } = station as Station;

    return <div className="basis-10 flex-shrink-0 h-10 mt-3 sm:mt-0 flex justify-center items-center">
      {
        favicon
          // The images sources are not consistent for this to work
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={favicon} alt="favicon" aria-hidden className="h-full"/>
          : <IconRadio className="text-fuchsia-600 w-8 h-8"/>
      }
    </div>;
  }

  function renderTitle() {
    const { name } = station as Station;

    return <Typography variant="h4" className="truncate text-fuchsia-600 mb-4 sm:mb-0">
      { name.trim() ? name.trim() : 'Staion details' }
    </Typography>;
  }

  function renderStreamData() {
    const {
      codec,
      bitrate,
      language
    } = station as Station;

    console.log(language);

    return <div>
      <ul className="text-gray-800 dark:text-gray-300 flex justify-evenly capitalize">
        { codec ? <li><strong>Codec: </strong>{ codec }</li> : <></> }
        { bitrate ? <li><strong>Bitrate: </strong>{ bitrate }</li> : <></> }
        { language.length > 0 && language[0].trim().length > 0 ? <li><strong>Language: </strong>{ language[0] }</li> : <></> }
      </ul>
    </div>;
  }

  function renderTags() {
    const { tags } = station as Station;

    return <ul className="flex gap-1 justify-center">
      { tags.map(
        (tag, key) => <li key={ key }>
          <Tag value={tag}/>
        </li>)
      }
    </ul>
  }

  function renderStatistics() {
    const {
      clickCount,
      clickTrend,
      clickTimestamp,
      votes
    } = station as Station;

    return <div>
      <Typography variant="h6" className="text-fuchsia-600">Statistics</Typography>
      <ul className="text-gray-800 dark:text-gray-300">
        <li><strong>Click count: </strong>{ clickCount }</li>
        <li><strong>Click trend: </strong>{ clickTrend }</li>
        <li><strong>Last click: </strong>{ clickTimestamp.toLocaleString() }</li>
        <li><strong>Votes: </strong>{ votes }</li>
      </ul>
    </div>;
  }

  function renderMap() {
    const { geoLat, geoLong } = station as Station;

    return <div className={`w-full ${geoLat && geoLong ? '' : 'hidden'}`}>
      <Typography variant="h6" className="text-fuchsia-600">Location</Typography>
      <div className="w-full aspect-video">
        {
          geoLat && geoLong
          ? <GoogleMaps latitude={ geoLat } longitude={ geoLong } />
          : <></>
        }
      </div>
    </div>;
  }

  function renderDetails() {
    return <div className="w-full flex flex-col gap-y-6">
      <div className="flex flex-col w-full sm:flex-row justify-between items-center">
        <div className="flex flex-col w-full sm:flex-row items-center gap-2 truncate">
          { renderFavIcon() }
          { renderTitle() }
        </div>
        <StationControls { ...station as Station }/>
      </div>
      { renderStreamData() }
      { renderTags() }
      { renderStatistics() }
      { renderMap() }
    </div>;
  }

  return <div className="w-full overflow-hidden">
    {
      loading
      ? renderLoading()
      : (station
        ? renderDetails()
        : renderEmpty()
      )
    }
  </div>
}

export default StationDetailsPage;