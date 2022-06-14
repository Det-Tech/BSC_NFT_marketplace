import React,{useEffect, useState} from 'react';
import "./App.css";
import Routes from './router'
import "react-datepicker/dist/react-datepicker.css";
import {useSelector, useDispatch, connect, Provider} from 'react-redux';
import store from "./store";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App(){
  const [open, setOpen] = useState(false);
  useEffect( async ()=>{
    if (window.ethereum) {
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      });
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    console.log(chainId);
    if(chainId==="0x13881")
    setOpen(false);
    else
    setOpen(true);
    }
  }
  )
    return(
        <Provider store={store}>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            style = {{height: "100%"}}
          >
            <DialogTitle id="alert-dialog-slide-title">{"chain error"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Please set your chain to Matic test chain!
                https://docs.matic.network/docs/develop/metamask/config-matic/
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Routes /> 
        </Provider>
    )
  }

export default App;
