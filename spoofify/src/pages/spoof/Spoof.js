import React from 'react';
import './style.css'
import Black from './templates/Black BG.png';
import DarkPurple from './templates/Dark Purple BG.png';
import LightPurple from './templates/Light Purple BG.png';
import Orange from './templates/Orange BG.png';
import Teal from './templates/Teal BG.png';
import Yellow from './templates/Yellow BG.png';

const WRAPPED_IMAGE_MAP = {
    "Black": Black,
    "Dark Purple": DarkPurple,
    "Light Purple": LightPurple,
    "Orange": Orange,
    "Teal": Teal,
    "Yellow": Yellow
}

export default function Spoof({genre, minutesListened, type}) {
    const artists = ["Artist 1", "Artist 1", "Artist 1", "Artist 1", "Artist 1"]
    const songs = ["Song 1", "Song 1", "Song 1", "Song 1", "Song 1"]
    return (
        <div className="wrappedContainer" style={{backgroundImage: `url("${WRAPPED_IMAGE_MAP[type]}")`}}>
            <table className="artistContainer">
                {artists.map((artist) => <p className="artist">{artist}</p>)}
            </table>
            <table className="songs">
                {songs.map((song) => <p>{song}</p>)}
            </table>
            <p className="minutes-listened">{minutesListened}</p>
            <p className="genre">{genre}</p>
        </div>
    )
}
