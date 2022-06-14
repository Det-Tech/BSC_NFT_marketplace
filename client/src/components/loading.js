import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles'
import {Favorite, MoreVert} from '@material-ui/icons'
import {IconButton} from '@material-ui/core';
import loadingImg from '../assets/img/new3.gif';


const useStyles = makeStyles((theme) => ({
  bidRoot: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0'
  },
  bid: {
    height: 350,
    width: 280,
  },
  bidTop: {
    height: 50,
    width: 280,
    backgroundColor: "#4b33c5",
    borderRadius: '10px 10px 0 0'
  },
  text: {
    zIndex: 3,
    padding: '10px 20px',
    backgroundColor: '#27167e',
    borderRadius: '0 0 10px 10px',
    position: 'relative'
  },
  iconHeart: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    color: '#4b33c5'
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins'
  },
  hoverZoom: {
    overflow: 'hidden',
    position: 'relative',
    height: 200,
    width: 280,
    cursor: 'pointer'
  },
  iconMore: {
    zIndex: 3,
    position: 'relative',
    float:"right",
    color: 'white',
    outline: 'none !important'
  },
  image: {
    height: 200,
    width: 280,
  },
  seller1: {
    zIndex: 2,
    position: 'relative',
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    borderRadius: '50%'
  },
  seller2: {
    zIndex: 3,
    position: 'relative',
    top: 10,
    left: -10,
    width: 30,
    height: 30,
    borderRadius: '50%'
  },
  check: {
    zIndex: 4,
    position: 'absolute',
    top: 10,
    left: 40,
    width: 12,
    height: 12
  },
  fire: {
    zIndex: 4,
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 15,
    height: 20
  }
}))
const options1 = [
  'Place a bid',
  'View on OpenSea',
  'Report',
];
const options2 = [
  'share',
  'on Sale',
  'Report'
];
const options3 = [
  'Place a bid',
  'View on OpenSea',
  'Report',
];
const ITEM_HEIGHT = 48;

function Loading(props) {
  const classes = useStyles();
 
  return (
    <div className={classes.bidRoot}>
      <div className={classes.bid}>
        <div className = {classes.bidTop}>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                className={classes.iconMore}
            >
                <MoreVert />
            </IconButton>
          <img className={classes.seller1} src='/images/seller-1.png'></img>
          <img className={classes.seller2} src='/images/seller-2.png'></img>
        </div>
        <div className={classes.hoverZoom}>
          <img className={classes.image} src='/images/loading.gif'/>
        </div>
        <div className={classes.text}>
          <div className={classes.name}>loading</div>
          <div style={{fontSize: 13}}>
            <span style={{color: 'green', paddingRight: 20}}>{`1 WBNB`}</span>
            <span style={{color: 'gray'}}>1 of 1</span>
          </div>
          <div style={{fontSize: 13}}>
            <span style={{color: 'white'}}>Highest Bid</span>
            <span style={{color: '#1199cb'}}>1 WBNB</span>
          </div>
          <Favorite className={classes.iconHeart} />
        </div>
      </div>
    </div>
  );
}

export default Loading;