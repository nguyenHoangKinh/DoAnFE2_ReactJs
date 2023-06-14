import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
import { RHAP_UI } from 'react-h5-audio-player';

export default function Playing() {
    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        showSkipControls={true}
        showJumpControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
        customProgressBarSection={
          [
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.CURRENT_TIME,
            <div class='text-white mx-2'>/</div>,
            RHAP_UI.DURATION,
          ]
        }
      />
    </div>
  );
}
