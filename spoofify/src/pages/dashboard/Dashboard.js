import React, {useEffect} from 'react'
import useAuth from '../../utils/useAuth'
import {Container} from '@mui/material'
import Playlist from '../../components/playlist/Playlist'
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: "963ad489f2fd482a9358b132e7456df0",
})

export default function Dashboard({code}) {
  const accessToken = useAuth(code)

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  return (
    <Container>
      <Playlist />
    </Container>
  )
}
