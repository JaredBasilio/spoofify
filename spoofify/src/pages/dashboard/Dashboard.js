import React, {useEffect, useState} from 'react'
import useAuth from '../../utils/useAuth'
import {Stack, Typography, Box, TextField, FormControl, Tabs, Tab, Select, MenuItem, InputLabel} from '@mui/material'
import Playlists from '../../components/playlists/Playlists'
import Songs from '../../components/songs/Songs'
import PropTypes from 'prop-types';
import SpotifyWebApi from 'spotify-web-api-node';
import Test from '../test/Test'

const spotifyApi = new SpotifyWebApi({
  clientId: "963ad489f2fd482a9358b132e7456df0",
})

const WRAPPED = ["Black", "Dark Purple", "Light Purple", "Orange", "Teal", "Yellow"]

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Dashboard({code}) {
  const accessToken = useAuth(code)
  const [playlists, setPlaylists] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [wrappedType, setWrappedType] = useState('Black')
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTypeChange = (event) => {
    setWrappedType(event.target.value);
  };

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    // Get the authenticated user
    if (!accessToken) return
    spotifyApi.getMe()
    .then(function(data) {
      console.log(data.body)
      setCurrentUser(data.body.id);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    if (!currentUser) return

    let cancel = false
    spotifyApi.getUserPlaylists(currentUser)
      .then(function(data) {
        if (cancel) return
        setPlaylists(
          data.body.items.map(playlist => {
            const smallestPlaylistImage = playlist.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
              },
              playlist.images[0]
            )

            return {
              name: playlist.name,
              image: smallestPlaylistImage.url,
            }
          })
        )
      },function(err) {
        console.log('Something went wrong!', err);
      });
    
      return () => (cancel = true)
  }, [accessToken, currentUser])

  return (
    <Box padding='3em' display="flex">
        <Box width="50%">
          <Typography variant="h5" fontWeight='bold'>Customize Wrapped</Typography>
          <Stack spacing={2}>
            <FormControl>
              <Typography variant="h6">Source</Typography>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
                  <Tab label="Playlists" {...a11yProps(0)} />
                  <Tab label="Songs" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Playlists playlists={playlists}/>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Songs accessToken={accessToken} spotifyApi={spotifyApi}/>
              </CustomTabPanel>
            </FormControl>
            <FormControl>
              <Typography variant="h6">Statistics</Typography>
              <TextField id="top-genre" label="Top Genre" variant="outlined" dispay="flex" sx={{m:1}}/>
              <TextField id="minutes-listened" label="Minutes Listened" variant="outlined" dispay="flex" sx={{m:1}}/>
            </ FormControl>
            <FormControl>
              <Typography variant="h6">Wrapped Type</Typography>
              <Select
                value={wrappedType}
                onChange={handleTypeChange}
                sx={{m:1}}
              >
                {WRAPPED.map(type => 
                  <MenuItem value={type}>{type}</MenuItem>
                )}
              </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box width="10vw">
        <Test />
      </Box>
    </Box>
  )
}
