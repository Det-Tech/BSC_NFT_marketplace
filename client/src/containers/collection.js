import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {IconButton, Menu, MenuItem, Grid} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import backgroundImg from '../assets/img/background.png';
import Bid from '../components/bid'
import './style/home.css';
import coverImg from '../assets/img/user_cover.png';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FollowingModal from '../components/following_modal';
import Error404 from '../components/404';

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [followingOpen, setFollowingOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [option, setOption] = useState('onSale');

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
        <div className = "text-center mt-3 mb-5">
            <button className = 'x-user-uploadbutton mr-2'><CloudUploadOutlinedIcon /></button>
            <button className = 'x-user-uploadbutton'><MoreHorizOutlinedIcon /></button>
        </div>
        <div className = "diceGrid-nopadding-short">
            <div className = "x-home-filter">
            <button className = "x-home-filter-button d-inline-block" onClick = {()=>setOption('onSale')}>Onsale</button>
            <button className = "x-home-filter-button d-inline-block" onClick = {()=>setOption('collectibles')}>Collectibles</button>
            </div>
        </div>
        {option == 'collectibles'?(
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
        ):
            <Error404 />
        }
      </div>
    </div>
  )
}
export default Collection
