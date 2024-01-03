import React, {useEffect, useState} from 'react'
import useAuth from '../../utils/useAuth'
import {Container, Typography, Box, TextField, FormControl} from '@mui/material'
import Playlists from '../../components/playlists/Playlists'
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: "963ad489f2fd482a9358b132e7456df0",
})

export default function Dashboard({code}) {
  const accessToken = useAuth(code)
  const [playlists, setPlaylists] = useState([]);
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    // Get the authenticated user
    if (!accessToken) return
    spotifyApi.getMe()
    .then(function(data) {
      console.log(data.body)
      setCurrentUser(data.body.id);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    if (!currentUser) return

    let cancel = false
    spotifyApi.getUserPlaylists(currentUser)
      .then(function(data) {
        if (cancel) return
        setPlaylists(
          data.body.items.map(playlist => {
            const smallestPlaylistImage = playlist.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
              },
              playlist.images[0]
            )

            return {
              name: playlist.name,
              image: smallestPlaylistImage.url,
            }
          })
        )
      },function(err) {
        console.log('Something went wrong!', err);
      });
    
      return () => (cancel = true)
  }, [accessToken, currentUser])

  return (
    <Container>
      <FormControl>
        <Typography variant="h5" fontWeight='bold'>Customize Wrapped</Typography>
        <Box>
          <Typography variant="h6">Source</Typography>
          <Playlists playlists={playlists}/>
          <Box dispay="flex">
            <Typography variant="h6" dispay="flex">Top Genre</Typography>
            <TextField id="top-genre" variant="outlined" dispay="flex"/>
          </Box>
          <Box dispay="flex">
            <Typography variant="h6" dispay="flex">Minutes Listened</Typography>
            <TextField id="minutes-listened" variant="outlined" dispay="flex"/>
          </Box>
        </Box>
      </FormControl>
    </Container>
  )
}
