import React from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { BsArrowRepeat, BsPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'
const Controls = ({ isPlaying, isActive, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => {
    return (

        <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
            {/* Repeat */}
            <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} className="hidden sm:block cursor-pointer" onClick={() => setRepeat((prev) => !prev)} />
            {/* Skip to Previous */}
            {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
            {/* play and pause */}
            {isPlaying ?
                <BsPauseFill size={45} color="#FFF" className="cursor-pointer" onClick={handlePlayPause} /> :
                <BsFillPlayFill size={45} color="#FFF" className="cursor-pointer" onClick={handlePlayPause} />
            }
            {/* Skip to next */}
            {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
            {/* Shuffle */}
            <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
        </div>
    )
}

export default Controls