import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, IconButton, Button, InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import {Menu} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    borderRadius: 30,
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    textTransform: 'none',
    marginRight: 20,
    outline: 'none !important',
  },
}))
function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div position="static" style={{paddingTop: 30, paddingBottom: 15, borderBottom: 'solid 1px #2C206C'}}>
        <Toolbar variant="dense">
          <div style={{cursor: 'pointer'}}>
            <img src="/logo.png"></img>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Typography variant="h6" color="inherit">
            <Link to="/">
              <Button className={classes.button} style={{color: 'white'}}>Explore</Button>
            </Link>
            <Link to="/">
              <Button className={classes.button} style={{color: 'white'}}>My items</Button>
            </Link>
            <Link to="/">
              <Button className={classes.button} style={{color: 'white'}}>Following</Button>
            </Link>
            <Link to="/">
              <Button className={classes.button} style={{color: 'white'}}>Activity</Button>
            </Link>
            <span style={{borderRight: 'solid 2px #3851F0'}}></span>
            <Link to="/">
              <Button className={classes.button} style={{color: 'white', marginLeft: 20}}>How it works</Button>
            </Link>
            <Link to="/">
              <Button className={classes.button} style={{color: 'white'}}>Community</Button>
            </Link>
          </Typography>
          <Button className={classes.button} style={{color: 'white', borderRadius: 20, width: 150, backgroundColor: '#3CBDFE'}} variant="contained">
            Create
          </Button>
          <Button className={classes.button} style={{color: 'white', borderRadius: 20, width: 150, backgroundColor: '#EA5714'}} variant="contained">
            Connect Wallet
          </Button>
        </Toolbar>
      </div>
    </div>
  )
}
export default Nav
