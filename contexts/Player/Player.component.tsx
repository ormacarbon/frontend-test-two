import PlayerContext from './Player.context';
import { createRef, PropsWithChildren, useEffect, useState } from 'react';
import { Station } from 'radio-browser-api';

function PlayerContextComponent(props: PropsWithChildren) {
  const [current, setCurrent] = useState<Station|null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const player = createRef<HTMLAudioElement>();

  useEffect(() => {
    if(!player.current)
      return;

    player.current?.addEventListener('loadstart', onPlayerLoadStart);
    player.current?.addEventListener('play', onPlayerPlay);
    player.current?.addEventListener('pause', onPlayerPause);
    player.current?.addEventListener('loadeddata', onPlayerLoad);

    return () => {
      player.current?.removeEventListener('loadstart', onPlayerLoadStart);
      player.current?.removeEventListener('play', onPlayerPlay);
      player.current?.removeEventListener('pause', onPlayerPause);
      player.current?.removeEventListener('loadeddata', onPlayerLoad);
    }
  }, [player]);

  function onPlayerLoadStart() {
    setLoading(true);
  }

  function onPlayerPlay() {
    setPlaying(true);
    setLoading(false);
  }

  function onPlayerPause() {
    setPlaying(false);
    setLoading(false);
  }

  function onPlayerLoad() {
    player.current?.play()
      .then(() => setLoading(false));
  }

  function onPlay(station: Station) {
    if(station === current)
      player.current?.play()
        .then(() => setLoading(false));
    else
      setCurrent(station);
    setLoading(true);
  }

  function onPause() {
    if(!player.current)
      return;
    player.current?.pause();
  }

  return <PlayerContext.Provider value={{
    current,
    play: onPlay,
    pause: onPause,
    playing,
    loading
  }}>
    <audio src={ current ? current.urlResolved : undefined } ref={player} className="invisible"/>
    { props.children }
  </PlayerContext.Provider>
}

export default PlayerContextComponent;