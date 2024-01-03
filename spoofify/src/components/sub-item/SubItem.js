import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material'

export default function SubItem({item}) {
  return (
    <>
        <ListItem component="div">
            <ListItemAvatar>
                <Avatar src={item?.image} variant="square"/>
            </ListItemAvatar>
            <ListItemText primary={item?.name}/>
        </ListItem>
        <Divider />
    </>
  )
}
