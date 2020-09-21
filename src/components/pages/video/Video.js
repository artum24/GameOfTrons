import React from 'react';
import { Player, ControlBar } from 'video-react';
import DownloadButton from './DownloadButton';

export default Video => {
  // Add customized HLSSource component into video-react Player
  // The Component with `isVideoChild` attribute will be added into `Video` component
  // Please use this url if you test it from local:
  // http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8
  return (
    <Player src="https://kino-teatr.ua/public/main/films/trailer_16563.mp4">
      <ControlBar autoHide={false}>
        <DownloadButton order={7} />
      </ControlBar>
    </Player>
  );
};