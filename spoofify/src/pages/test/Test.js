import React from 'react';
import Black from "../../static/templates/Black BG.png";

export default function Test() {
    const artists = ["Artist 1", "Artist 1", "Artist 1", "Artist 1", "Artist 1"]
    const songs = ["Song 1", "Song 1", "Song 1", "Song 1", "Song 1"]
    const minutesListened = 0
    return (
        <div>
            <div style={{
                position: "absolute", 
                zIndex: 1, 
                color:'white',
                top: 716,
                right: 615,
                width: '40$'
            }}>
                {songs.map((song) => <p>{song}</p>)}
            </div>
            <div style={{
                position: "absolute", 
                zIndex: 1, 
                color: 'white',
                top: 716,
                right: 345,
            }}>
                {artists.map((artist) => <p>{artist}</p>)}
            </div>
            <img src={Black} style={{position: "absolute", width: '40%'}}></img>
        </div>
    )
}
