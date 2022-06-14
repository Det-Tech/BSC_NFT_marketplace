import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {IconButton, Menu, MenuItem, Grid} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import backgroundImg from '../assets/img/background.png';
import Footer from './layout/footer'
import './style/home.css';
import Badge from '@material-ui/core/Badge';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Portal from '../components/user_activity_portal';


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
function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const history = useHistory();
  const [option, setOption] = useState("all");

 

  return (
    <div style={rootStyle}>
        <div className = "mt-3 mb-3 x-font-big-blue text-center">
            Activity
        </div>
        <div className = "d-flex diceGrid-nopadding-short">
            <button className = "x-home-filter-button" onClick = {()=>setOption('all')}>All</button>
            <button className = "x-home-filter-button" onClick = {()=>setOption('following')}>Following</button>
            <button className = "x-home-filter-button" onClick = {()=>setOption('myactivity')}>My Activity</button>
        </div>
        <Grid container spacing = {3} className = "diceGrid mt-5">
            <Grid item md = {8} sm = {12} xs = {12}>
                <Portal />
                <Portal />
                <Portal />
                <Portal />
                <Portal />
            </Grid>
            <Grid item md = {4} sm = {12} xs = {12}>
                <div className = "d-flex mb-4">
                    <div className = "x-font-big-blue mr-4">Filters</div>
                    <button className = "x-activity-reset-filter-button">Reset Filters</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Listings</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Sales</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Purchases</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Bids</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Burns</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Followings</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Transfers</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Likes</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Purchases</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Bids</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Burns</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Followings</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Transfers</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Likes</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Purchases</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Bids</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Burns</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Followings</button>
                </div>
                <div className = "d-flex mb-2">
                    <button className = "x-activity-reset-feature-button mr-2"><FlashOnIcon color = "secondary" />Transfers</button>
                    <button className = "x-activity-reset-feature-button"><FlashOnIcon color = "secondary" />Likes</button>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
export default Home
