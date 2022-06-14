import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {IconButton, Menu, MenuItem, Grid} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import backgroundImg from '../assets/img/background.png';
import './style/home.css';
import coverImg from '../assets/img/user_cover.png';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Portal from '../components/user_activity_portal';
import FollowingModal from '../components/following_modal';


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
  const [followingOpen, setFollowingOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const closeModal = (event) => {
    setFollowingOpen(false);
  };

  const clipboard = ()=>{
    navigator.clipboard.writeText("0X3d6a89c8751a42302226193");
  }

  return (
    <div style={rootStyle}>
      <FollowingModal
        classes={{
          paper: classes.paper,
        }}
        id="followings"
        keepMounted
        open={followingOpen}
        onClose = {closeModal}
      />
      <div className = "x-user-cover">
        <img src = {coverImg} width = "100%" height= "200px" />
        <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
      </div>
      <div className='x-user-content'>
        <div className = "x-font-normal-white1 text-center">
          Sadboi.eth
        </div>
        <div className = "x-font-short-white text-center">
            0X3d6a89c8751a4...6193
            <FileCopyOutlinedIcon style = {{cursor: "pointer", marginLeft: "10px"}} onClick={clipboard} />
        </div>
        <div className = "x-font-short-white text-center mt-2">
           {"|<-E.Y.C->| sad#boi"}
        </div>
        <div className = "x-font-short-white text-center mt-2">
            <TwitterIcon color = "primary" />
            CryptoHoarderrr
        </div>
        <div className = "text-center mt-3 mb-5">
            <button className = 'x-user-followbutton mr-2'>Follow</button>
            <button className = 'x-user-uploadbutton mr-2'><CloudUploadOutlinedIcon /></button>
            <button className = 'x-user-uploadbutton'><MoreHorizOutlinedIcon /></button>
        </div>
        <div className = "x-home-filter">
          <button className = "x-home-filter-button">Onsale</button>
          <button className = "x-home-filter-button" onClick = {()=>history.push('/user/collectible')}>Collectibles</button>
          <button className = "x-home-filter-button" onClick = {()=>history.push('/user/created')}>Created</button>
          <button className = "x-home-filter-button">Liked</button>
          <button className = "x-home-filter-button" onClick = {()=>history.push('/user/activity')}>Activity</button>
          <button className = "x-home-filter-button" onClick = {()=>setFollowingOpen(true)}>Following</button>
          <button className = "x-home-filter-button">Followers</button>
        </div>
        <Grid container spacing = {3} className = "mt-5">
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
    </div>
  )
}
export default Home
