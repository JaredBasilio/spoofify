import React, {useEffect, useState} from 'react'
import { InputBase, IconButton, Paper, List, Box} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import SubItem from '../sub-item/SubItem'
import SpotifyWebApi from "spotify-web-api-node"

export default function Songs({accessToken, spotifyApi}) {
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearchChange = (event, newValue) => {
        setSearch(event.target.value);
      };

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
    
        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
          if (cancel) return
          console.log(res.body.tracks.items)
          setSearchResults(
            res.body.tracks.items.map(track => {
              const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                  if (image.height < smallest.height) return image
                  return smallest
                },
                track.album.images[0]
              )
    
              return {
                artist: track.artists.map(artist => artist.name).join(', '),
                title: track.name,
                albumUrl: smallestAlbumImage.url,
              }
            })
          )
        })
    
        return () => (cancel = true)
      }, [search, accessToken])

    return (
        <Box>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                elevation={0}
            >
                <InputBase         
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Spotify"
                    inputProps={{ 'aria-label': 'search spotify' }}
                    onChange={handleSearchChange}/>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <List sx={{ width: '100%', maxHeight: "40vh", bgcolor: 'background.paper', overflow: "auto" }}>
                {searchResults.map((song) => <SubItem item={song}/>)}
            </List>
        </Box>
    )
}
