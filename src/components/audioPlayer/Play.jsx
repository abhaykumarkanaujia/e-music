import React, { useContext } from 'react';
import QueryContext from '../context/query/QueryContext';
import PauseButton from '../../assets/ic_pause.svg';
import useAudioPlayer from './hooks';
import PlayButton from '../../assets/ic_play.svg';

const Play = () => {
    const context = useContext(QueryContext);
    const { track } = context;
    const { playerState, togglePlayPause, setPlaybackPosition } = useAudioPlayer(track);

    const { playbackState, currentTrackDuration, currentTrackPlaybackPosition } = playerState;

    function setProgress(value) {
        if (currentTrackDuration !== null) {
            setPlaybackPosition((value / 100) * currentTrackDuration);
        }
    }

    function computeProgress() {
        const noProgress = currentTrackDuration === null || currentTrackPlaybackPosition === null || currentTrackDuration === 0;
        if (noProgress) {
            return 0;
        } else {
            return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
        }
    }


    return (
        <>
            <div className="m-1 fixed bottom-0 left-0 right-0 md:left-36 flex p-2 rounded-md justify-left w-100 md:mx-4 md:mr-6 items-end">
                <button onClick={togglePlayPause}>
                    {
                        <img
                            src={playbackState === "PLAYING" ? PauseButton : PlayButton}
                            width={45}
                            height={45}
                            className={`drop-shadow-lg`}
                        />

                    }
                </button>
                <div className='w-full mx-4 object-center'>
                    <div className="flex flex-col bg-white">
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={computeProgress()}
                            step="0.25"
                            className="slider"
                            onChange={(event) => {
                                setProgress(parseInt(event?.target.value));
                            }}
                        />
                    </div>
                    <div className="flex w-100 flex-row justify-between mt-1 text-primary">
                        <span className="text-xs">{formatTime(currentTrackPlaybackPosition)}</span>
                        <span className="text-xs">{formatTime(currentTrackDuration)}</span>
                    </div>
                </div>


            </div>
        </>


    )
}

export default Play;


function formatTime(timeInSeconds) {
    if (timeInSeconds === null) return '00.00';
    const numberOfMinutes = Math.floor(timeInSeconds / 60);
    const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
    const minutes = `${numberOfMinutes}`.padStart(2, '0');
    const seconds = `${numberOfSeconds}`.padStart(2, '0');
    return `${minutes}:${seconds}`;
}