import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material'

export default function SubItem({item}) {
  return (
    <>
        <ListItem component="div">
            <ListItemAvatar>
                <Avatar src={item?.image || item?.albumUrl} variant="square"/>
            </ListItemAvatar>
            <ListItemText primary={item?.name || item?.title} secondary={item?.artist}/>
        </ListItem>
        <Divider />
    </>
  )
}
