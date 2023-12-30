import * as React from 'react';
import {Toolbar, Button, Stack} from "@mui/material"
import { Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Toolbar position='static'>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' href="/">Home</Button>
          <Button color='inherit' href="/about">About</Button>
          <Button color='inherit' href="/privacy">Privacy Policy</Button>
        </Stack>
      </Toolbar>
      <Outlet />
    </>
  )
}
export default Navbar;