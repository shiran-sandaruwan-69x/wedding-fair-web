import React, { useEffect, useRef } from 'react';
import audioFile from './audio/audioMic.mp3';


let audios = new Audio(audioFile);

const BackgroundAudioPlayer = () => {

    useEffect(() => {

    }, []);



    return (
        <div className="count-number-equivelance-audioPlayer">
            <button id="equivalence-audio-button" onClick={() => audios.play()}>Soundclip!</button>
        </div>
    );
};

export default BackgroundAudioPlayer;
