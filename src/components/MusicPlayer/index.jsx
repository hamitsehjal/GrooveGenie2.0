import React from 'react'

import Track from './Track'
import Controls from './Controls'
import Seekbar from './Seekbar'
import Player from './Player'
import VolumeBar from './VolumeBar'
const MusicPlayer = () => {
    return (
        <div>
            <Track />
            <Controls />
            <Seekbar />
            <Player />
            <VolumeBar />
        </div>
    )
}

export default MusicPlayer