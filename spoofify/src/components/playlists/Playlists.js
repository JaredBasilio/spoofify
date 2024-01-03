import React, {useState} from 'react'
import SubItem from '../sub-item/SubItem'
import { List, Box, ListSubheader} from '@mui/material'

export default function Playlists({playlists}) {
  return (
    <Box>
      <List 
        sx={{ width: '100%', maxWidth: 360, maxHeight: "40vh", bgcolor: 'background.paper', overflow: "auto" }}
        subheader={<ListSubheader>Playlists</ListSubheader>}
      >
        {playlists.map((playlist) => <SubItem item={playlist}/>)}
      </List>
    </Box>
  )
}
