import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, IconButton, ListItemIcon, Menu, MenuItem, Switch, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { ModeNight } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { change, resetSearch } from '../Redux/Reducers/searchReducer';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({ setMode, mode }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar  >
          <IconButton
            onClick={e => setOpen(!open)}
            cursor="pointer"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu sx={{ marginTop: 4, cursor: "pointer" }}
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              open={open}
              cursor="pointer"
              onClose={() => { setOpen(false) }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem >Profile</MenuItem>
              <MenuItem >My Favourites</MenuItem>
              <MenuItem >
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch checked={mode == "dark"} onChange={e => { setOpen(true); setMode(mode == "light" ? "dark" : "light") }} />
              </MenuItem>
            </Menu>
            <MenuIcon />
          </IconButton>
          <Box sx={{width : "100%"}}>
          <Link to='/TVShows'>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, cursor:"pointer", display: { xs: 'none', sm: 'block' } }}>
            Tv Show App
          </Typography>
          </Link>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => dispatch(change(e.target.value))}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

