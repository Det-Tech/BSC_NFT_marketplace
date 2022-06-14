import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {IconButton, Menu, MenuItem, Grid} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import backgroundImg from '../assets/img/background.png';
import Bid from '../components/bid'
import './style/home.css';
import Badge from '@material-ui/core/Badge';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

var rootStyle = {
  width: "100%",
  backgroundImage: `url(${backgroundImg})`,
  height: "100%",
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

const useStyles = makeStyles((theme) => ({
  moreButton: {
    outline: 'none !important',
    color: '#06edfe'
  },
}))
const options = [
  'None',
  'Atria',
  'Callisto',
];
const ITEM_HEIGHT = 48;
function Collection() {
  const [followingOpen, setFollowingOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();


  return (
    <div style={rootStyle}>
        <div className = "diceGrid x-font-big-blue">
            Following
            <HelpOutlineOutlinedIcon style = {{color: "grey"}}/>
            <button className = "x-art-fixedSize-transparent-button float-right">
                <TuneOutlinedIcon />
                Filter & Sort
            </button>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
          <Grid lg={3} md={4} sm={6} xs={12}>
            <Bid name='Nomad Submariner' image='/images/bid-1.png' />
          </Grid>
        </Grid>
    </div>
  )
}
export default Collection
