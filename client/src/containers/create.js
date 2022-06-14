import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {IconButton, Menu, MenuItem, Grid, Button} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import backgroundImg from '../assets/img/background.png';
import './style/home.css';
import Collect from '../components/create_collect';
import single from '../assets/img/single.png';
import multiple from '../assets/img/multiple.png';


var rootStyle = {
    width: "100%",
    backgroundImage: `url(${backgroundImg})`,
    height: "100%",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

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
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={rootStyle}>
        <div className = "x-create-title">
            <div className = "diceGrid-nopadding">
                <div className = "row">
                    <div className = "col-md-4 col-sm-4 col-xs-6 x-font-normal-white winorlose">
                        <Button className = "x-backbutton" onClick = {history.goBack}>← Go back</Button>
                    </div>
                    <div className = "col-md-8 col-sm-8 col-xs-6 x-risk-balance x-font-big-blue">Create Collectible</div>
                </div>
            </div>
        </div>
        <div className = "diceGrid row">
            <div className = "col-md-12 text-center x-font-normal-white mb-5">
                Choose "Single" if you want your collectible to be one of a kind or "Multiple" if you want to sell one collectible multiple times
            </div>
            <div className = "col-md-6">
                <Collect collectImg = {single} collectUrl = "/create/single"/><br/>
            </div>
            <div className = "col-md-6">
                <Collect collectImg = {multiple} collectUrl = "/create/multiple"/>
            </div>
            <div className = "col-md-12 text-center x-font-normal-white mt-5">
                We do not own your private keys and cannot access your funds without your confirmation
            </div>
        </div>
        </div>
    )
    }
    export default Home
