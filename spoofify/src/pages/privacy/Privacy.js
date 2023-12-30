import React from 'react'
import {Container, Grid, Typography} from '@mui/material';

export default function Privacy() {
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', textAlign: 'center'}}
      >
      <Grid item xs={3}>
        <Typography variant="h4">Privacy Policy</Typography>
        <Typography variant="body1">
        Spotify was developed as an open source app powered by the Spotify Music Web API. By choosing to use this app, you agree to the use of your Spotify account username and data for your playlists.


None of the data used by Spoofify is stored or collected anywhere, and it is NOT shared with any third parties. All information is used solely for displaying your Receipt.


Although you can rest assured that your data is not being stored or used maliciously, if you would like to revoke Receiptify's permissions, you can visit your apps page and click "REMOVE ACCESS" on Spoofify. Here is a more detailed guide for doing so.
        </Typography>
      </Grid>
    </Grid>
    </Container>
  )
}
