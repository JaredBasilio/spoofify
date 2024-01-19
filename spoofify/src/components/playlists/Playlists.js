import React, {useState} from 'react'
import SubItem from '../sub-item/SubItem'
import { List, Box} from '@mui/material'

export default function Playlists({playlists}) {
  return (
    <Box>
      <List 
        sx={{ width: '100%', maxHeight: "40vh", bgcolor: 'background.paper', overflow: "auto" }}
      >
        {playlists.map((playlist) => <SubItem item={playlist}/>)}
      </List>
    </Box>
  )
}
