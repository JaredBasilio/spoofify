import React from 'react';
import Black from "../../static/templates/Black BG.png";

export default function Login() {
    const artists = ["Artist 1"]
    const songs = ["Song 1"]
    return (
        <div>
            {artists.map((artist) => <p>{artist}</p>)}
            {songs.map((song) => <p>{song}</p>)}
            <img src={Black}></img>
        </div>
    )
}
