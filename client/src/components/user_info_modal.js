import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {makeStyles, Avatar} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import coinImg from '../assets/img/wallet_icon2.png';
import ToggleBox from '../components/togglebox';
import Web3 from 'web3';


const useStyles = makeStyles((theme) => ({
    button: {
      textTransform: 'none',
      outline: 'none !important',
      color: 'white', 
      borderRadius: 20, 
      width: "21ch",
      height: '36px',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    }
  }));



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    {...props}
  />
));

export default function CustomizedMenus(props) {
    const classes = useStyles();
    const {metamaskState, connect_wallet} = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const history = useHistory();
  const [flag, setFlag] = useState(true);
  const [ethBalance, setEthBalance] = useState();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open_modal = () =>{
      setAnchorEl(true)
  }

  const clipboard = ()=>{
    navigator.clipboard.writeText("0X3d6a89c8751a42302226193");
  }

  const edit_profile = () =>{
      history.push('/edit-profile');
      setAnchorEl(null)
  }

  useEffect(()=>{
    if(flag){
      if(window.ethereum){
        setFlag(false);
        var web3 = new Web3(window.ethereum);
        // web3.eth.getBalance(window.ethereum.selectedAddress)
        // .then((res)=>{
        //   console.log(res);
        //   setEthBalance(res);
        // })
      }
    }
  })

  const handleDisconnect = () =>{
    
  }

  return (
    <div>
        {!metamaskState?
          <Button className={classes.button} style={{ backgroundColor: '#EA5714'}} variant="contained" onClick = {connect_wallet}>
            <LockOutlinedIcon />Connect Wallet
          </Button>
          :
          <Button className={classes.button} style={{ backgroundColor: '#EA5714'}} variant="contained" onClick = {open_modal}>
            <LockOpenOutlinedIcon />connected
          </Button>
          }
      <StyledMenu
        id="x-customized-user-modal"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className = "x-beside-padding-container">
            <div className = "x-font-normal-white">
                {typeof window != "undefined"?window.ethereum.selectedAddress: "please install metamask!"} 
                <FileCopyOutlinedIcon style = {{cursor: "pointer", marginLeft: "10px"}} onClick={clipboard} />
            </div>
            <div className = "x-font-normal-yellow mb-4">
                set display name
            </div>
            <div className = "mb-2">
                <Avatar src = {coinImg} alt="Remy Sharp" className = "d-inline-block mr-2" />
                <div className = "d-inline-block">
                    <div className = "x-font-small-grey">
                        balance
                    </div>
                    <div className = "x-font-normal-white">
                        {`${ethBalance} ETH`} <span className = "x-font-small-grey">$0.00</span>
                    </div>
                </div>
            </div>
            <div>
                <Avatar src = {coinImg} alt="Remy Sharp" className = "d-inline-block mr-2" />
                <div className = "d-inline-block mr-5">
                    <div className = "x-font-small-grey">
                         bidding balance
                    </div>
                    <div className = "x-font-normal-white">
                        0 ETH <span className = "x-font-small-grey">$0.00</span>
                    </div>
                </div>
                <button className = "x-heart-round-transparent-button ml-5"><SwapCallsIcon /></button>
            </div>
            {/* <div className = "mt-4">
                <button className = "x-manage-fund-button x-font-normal-white">Manage funds on Zerion</button>
            </div> */}
                <hr />
            <div className = "x-initial-modal-list-item mb-2">
                My items
            </div>
            <div className = "x-initial-modal-list-item mb-2" onClick = {edit_profile}>
                Edit profile
            </div>
            <div className = "x-initial-modal-list-item mb-2">
                Autoplay
                <div className = "float-right d-inline-block">
                    <ToggleBox value={autoPlay} onChange={() => setAutoPlay(!autoPlay)} />
                </div>
            </div>
            <div className = "x-initial-modal-list-item mb-2" onClick = {handleDisconnect}>
                Disconnect
            </div>
        </div>
      </StyledMenu>
    </div>
  );
}
