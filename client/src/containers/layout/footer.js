import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, IconButton, Button, InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import {Menu} from '@material-ui/icons'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#211272'
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
    marginRight: 15,
    outline: 'none !important',
  },
  footerIcon: {
    border: '1px solid',
  },
  quickLink: {
    "@media (max-width: 1200px)": {
      display: 'inline-block',
    },
  },
  resFooter: {
    "@media (max-width: 1200px)": {
      justifyContent: 'space-between',
    },
  },
}))
function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div position="static" style={{paddingTop: 30, paddingBottom: 15, }}>
        <Toolbar variant="dense" className={classes.resFooter}>
          <div style={{cursor: 'pointer', marginRight: 50}}>
            <img src="/logo.png" width = "50px"></img>
          </div>
          <Typography variant="h6" color="inherit" style={{ display: 'flex', borderBottom: 'solid 1px #2C206C', paddingBottom: 8, }}>
            <div className={classes.quickLink}>
              <Link to="/">
                <Button className={classes.button} style={{color: '#ef6e14', padding: '0 20px 0 0'}}>QUICK LINK</Button>
              </Link>
              <Link to="/">
                <Button className={classes.button} style={{color: 'white', fontSize: 11}}>Explore</Button>
              </Link>
              <Link to="/">
                <Button className={classes.button} style={{color: 'white', fontSize: 11}}>My items</Button>
              </Link>
              <Link to="/following">
                <Button className={classes.button} style={{color: 'white', fontSize: 11}}>Following</Button>
              </Link>
              <Link to="/activity">
                <Button className={classes.button} style={{color: 'white', fontSize: 11}}>Activity</Button>
              </Link>
              <Link to="/faq">
                <Button className={classes.button} style={{color: 'white', fontSize: 11}}>How it works</Button>
              </Link>
              <Link to="/discussion/categories">
                <Button className={classes.button} style={{color: 'white', fontSize: 11}}>Community</Button>
              </Link>
            </div>
            <div>
              <Link>
                <Button className={classes.button} style={{color: '#296fb6', padding: '0 20px 0 50px', fontFamily: 'Muli'}}>FOLLOW US</Button>
              </Link>
              <a href="https://youtube.com" style={{marginRight: 10}}>
                <YouTubeIcon className={classes.footerIcon} />
              </a>
              <a href="https://facebook.com" style={{marginRight: 10}}>
                <FacebookIcon className={classes.footerIcon} />
              </a>
              <a href="https://linkedin.com" style={{marginRight: 10}}>
                <LinkedInIcon className={classes.footerIcon} />
              </a>
              <a href="https://twitter.com" style={{marginRight: 10}}>
                <TwitterIcon className={classes.footerIcon} />
              </a>
              <a href="https://instagram.com" style={{marginRight: 10}}>
                <LinkedCameraIcon className={classes.footerIcon} />
              </a>
            </div>
          </Typography>
        </Toolbar>
      </div>
      <div style={{color: 'gray', textAlign: 'center', padding: 10}}>
        @2021 auctionhunt.,Ltd
      </div>
    </div>
  )
}
export default Nav
