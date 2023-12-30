import React from 'react'
import {Link, Typography} from '@mui/material'

export default function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
        Made by <Link color="inherit" href="https://jaredb.me/">Jared Basilio</Link>
    </Typography>
  )
}
