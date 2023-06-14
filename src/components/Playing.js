import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
import { RHAP_UI } from 'react-h5-audio-player';

class VolumePercentage extends PureComponent<{}, { volumeText: string }> {
  player = createRef<AudioPlayer>()

  state = { volumeText: '100%' }

  componentDidMount(): void {
    this.player.current.audio.current.addEventListener('volumechange', (e) => {
      this.setState({ volumeText: `${((e.target as HTMLAudioElement).volume * 100).toFixed(0)}%` })
    })
  }

  render(): React.ReactNode {
    const { volumeText } = this.state
    return (
      <AudioPlayer
        ref={this.player}
        src={SAMPLE_MP3_URL}
        customVolumeControls={[RHAP_UI.VOLUME, <div key={2}>&nbsp;&nbsp;{volumeText}</div>]}
      />
    )
  }
}

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
        layout="horizontal"
        showSkipControls={true}
        showJumpControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
        customProgressBarSection={
          [
            RHAP_UI.CURRENT_TIME,
            <div>/</div>,
            RHAP_UI.DURATION,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.VOLUME,
          ]
        }
        customVolumeControls={[]}
      />
    </div>
  );
}
