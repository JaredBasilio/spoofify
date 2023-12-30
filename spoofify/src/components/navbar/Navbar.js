import * as React from 'react';
import {AppBar, Toolbar, Button, Stack} from "@mui/material"

function Navbar() {
  return (
    <Toolbar position='static'>
      <Stack direction='row' spacing={2}>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Privacy Policy</Button>
      </Stack>
    </Toolbar>
  )
}
export default Navbar;