import React from 'react';
import {Grid, Button, Typography} from '@mui/material'

const AUTH_URL =
"https://accounts.spotify.com/authorize?client_id=963ad489f2fd482a9358b132e7456df0&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-email%20user-read-private%20user-library-read%20user-library-modify"

export default function Login() {
  return (
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', textAlign: 'center'}}
    >
      <Grid item xs={3}>
        <Typography variant="h2" fontWeight='bold'>spoofify</Typography>
        <Typography variant="h6">fake your 2023 spotify wrapped stories</Typography>
        <Button variant="contained" color='success' href={AUTH_URL} sx={{m:2}}>
            Login with Spotify
        </Button>
      </Grid>
    </Grid>
  )
}
