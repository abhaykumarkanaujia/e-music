/* eslint-disable @typescript-eslint/no-floating-promises */

export function createAudioplayer(
    link,
    onStateChange,
) {
    const audioElement = new Audio();

    /* === PlayerState === */
    //#region
    function emitCurrentPlayerState() {
        const state = computeCurrentPlayerState();
        onStateChange(state);
    }

    function computeCurrentPlayerState() {
        return {
            currentTrackDuration: getCurrentTrackDuration(),
            currentTrackPlaybackPosition: getCurrentTrackPlaybackPosition(),
            playbackState: getPlaybackState()
        };
    }

    function getCurrentTrackDuration() {
        return isNaN(audioElement.duration) ? null : audioElement.duration;
    }

    function getCurrentTrackPlaybackPosition() {
        return isNaN(audioElement.currentTime) ? null : audioElement.currentTime;
    }

    function getPlaybackState() {
        return audioElement.paused ? 'PAUSED' : 'PLAYING';
    }
    //#endregion

    /* === Event Listener === */
    //#region
    function setupAudioElementListeners() {
        audioElement.addEventListener('playing', emitCurrentPlayerState);
        audioElement.addEventListener('pause', emitCurrentPlayerState);
        audioElement.addEventListener('ended', onCurrentTrackEnded);
        audioElement.addEventListener('timeupdate', emitCurrentPlayerState);
        audioElement.addEventListener('loadeddata', emitCurrentPlayerState);
    }

    function removeAudioElementListeners() {
        audioElement.removeEventListener('playing', emitCurrentPlayerState);
        audioElement.removeEventListener('pause', emitCurrentPlayerState);
        audioElement.removeEventListener('ended', onCurrentTrackEnded);
        audioElement.removeEventListener('timeupdate', emitCurrentPlayerState);
        audioElement.removeEventListener('loadeddata', emitCurrentPlayerState);
    }

    function onCurrentTrackEnded() {
        replayCurrentTrack();

    }

    //#endregion

    /* === Track handling === */
    //#region


    function loadTrack(lnk) {
        if (link !== "" | null) {
        audioElement.src = lnk;
        audioElement.load();
        }else{
            console.log("Not Available!! Sorry");
        }
    }

    //#endregion

    /* === Init & Cleanup === */
    //#region
    function init() {
        if (link !== "" | null) {
            setupAudioElementListeners();
            loadTrack(link);
            audioElement.play();
        }else{
            console.log("Link Not available");
        }
    }

    function cleanup() {
        removeAudioElementListeners();
        audioElement.pause();
    }
    //#endregion

    /* === Controls === */
    //#region
    function setPlaybackPosition(position) {
        if (isNaN(position)) return;
        audioElement.currentTime = position;
    }

    function togglePlayPause() {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }
    //#endregion

    init();

    return {
        setPlaybackPosition,
        togglePlayPause,
        cleanup,
    };
}
