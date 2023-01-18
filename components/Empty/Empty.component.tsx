import { IconDeviceAirpods } from '@tabler/icons';
import { Typography } from '@mui/material';
import React from 'react';

type EmptyProps = {
  title: string,
  caption: string
};

function Empty(props: EmptyProps) {
  const { title, caption } = props;

  return <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
    <IconDeviceAirpods className="h-20 w-20 text-fuchsia-800 dark:text-fuchsia-500" strokeWidth={.5}/>
    <div>
      <Typography variant="h5" className="w-full text-fuchsia-700 dark:text-fuchsia-500">
        { title }
      </Typography>
      <p className="dark:text-gray-300">
        { caption }
      </p>
    </div>
  </div>
}

export default Empty;