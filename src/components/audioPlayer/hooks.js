import { useState, useRef, useEffect } from 'react';
import { createAudioplayer } from './audioPlayer';

function useAudioPlayer(track) {
    const InitialPlayerState = { currentTrackDuration: null, currentTrackPlaybackPosition: null, playbackState: 'PAUSED' };
    const [playerState, setPlayerState] = useState(InitialPlayerState);
    const playerRef = useRef(null);

    useEffect(() => {
        const newPlayer = createAudioplayer(track, setPlayerState);
        playerRef.current = newPlayer;
        return () => {
            newPlayer.cleanup();
        };
    }, [track]);

    function setPlaybackPosition(position) {
        playerRef.current?.setPlaybackPosition(position);
    }

    function togglePlayPause() {
        playerRef.current?.togglePlayPause();
    }

    function cleanup() {
        playerRef.current?.cleanup();
    }

    return { setPlaybackPosition, playerState, togglePlayPause, cleanup };
}

export default useAudioPlayer;
