import React from 'react'
import {Grid, Container, Typography, Link} from '@mui/material'

export default function About() {
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
        <Typography variant="h4" fontWeight="bold">About</Typography>
        <Typography variant="body1" sx={{maxWidth: '50vw'}}>
          Spoofify was inspired by a social media trend photoshopping 2023 Spotify Wrapped 
          results with silly music sequences, absurd music listen times, and more!
          <br /><br />
          In part, Spoofify was also inspired by Receiptify, a web application made by{' '}
          <Link href="https://michellexliu.me/">Michelle Liu</Link>{' '}
          used to make receipts of your most listened songs and tracks. A lot of the design decisions and
          pieces of this application were inspired from this tool. Check it out{' '}
          <Link href="https://receiptify.herokuapp.com/">here</Link>!
        </Typography>
        <Typography variant="h5" fontWeight="bold">FAQ</Typography>
        <Typography variant="h6">Will Spotify steal my data?</Typography>
        <Typography variant="body1" sx={{maxWidth: '50vw'}}>
          No
        </Typography>
        <Typography variant="h6">How did you make this?</Typography>
        <Typography variant="body1" sx={{maxWidth: '50vw'}}>
          View the code{' '}
          <Link href="https://github.com/JaredBasilio/spoofify">Here</Link>
        </Typography>
      </Grid>
    </Grid>
  </Container>
  )
}
