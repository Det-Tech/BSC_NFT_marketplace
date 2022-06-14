import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import {useHistory, withRouter} from 'react-router-dom';
import {useSelector, useDispatch, connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import walletIcon0 from '../assets/img/metamask.svg';
import walletIcon1 from '../assets/img/wallet_icon1.png';
import walletIcon2 from '../assets/img/wallet_icon2.png';
import walletIcon3 from '../assets/img/wallet_icon3.png';
import walletIcon4 from '../assets/img/wallet_icon4.png';
import walletImg from '../assets/img/connect_wallet.png';

function ConnectWallet(){
    const history = useHistory();
    const dispatch = useDispatch();
    const metaMask_state = useSelector(state => state.metamask);
    const [publicKey, setPublicKey] = useState('');

    const connectMetamask = () =>{
        var web3 = new Web3();
        if (window.ethereum) {
          web3 = new Web3(window.ethereum);
          try {
            window.ethereum.enable().then((res)=> {
              var returnStr = web3.currentProvider.selectedAddress;
              dispatch({type: 'CHANGE_METAMASKSTATE', payload: true});
              // User has allowed account access to DApp...
            });
          } catch (e) {
            // User has denied account access to DApp...
          }
        }
        // Legacy DApp Browsers
        else if (window.web3) {
          // web3 = new Web3(web3.currentProvider);
          }
        // Non-DApp Browsers
        else {
          alert("You have to install MetaMask !");
        }
    }

    return(
        <div className = "home">
            <div className="broadcast">
                <div className="container">
                <div onClick = {history.goBack}>
                    <svg viewBox="0 0 14 12" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29436 0.292893C6.68488 -0.0976311 7.31805 -0.0976311 7.70857 0.292893C8.0991 0.683417 8.0991 1.31658 7.70857 1.70711L4.41568 5H12.9985C13.5508 5 13.9985 5.44772 13.9985 6C13.9985 6.55228 13.5508 7 12.9985 7H4.41568L7.70857 10.2929C8.0991 10.6834 8.0991 11.3166 7.70857 11.7071C7.31805 12.0976 6.68488 12.0976 6.29436 11.7071L0.587252 6L6.29436 0.292893Z" fill="currentColor"></path></svg>
                    go back
                </div>
                <p className="title">Connect your wallet</p>
                </div>
            </div>
            <div className = "text-center mt-2 x-font-small-grey">
                Connect with one of available wallet providers or create a new wallet <span className = "x-font-normal-blue">What is wallet?</span>
            </div>
            <Grid container spacing = {3} className = "diceGrid">
                <Grid item xs = {12} sm = {6} md = {6}>
                    <button className = "x-connect-wallet-button0 mb-4" onClick = {connectMetamask}>
                        <img src = {walletIcon0} width = "48px" alt = "walletIcon1" className = "mr-4" />
                        Metamask
                    </button>
                    <button className = "x-connect-wallet-button1 mb-4">
                        <img src = {walletIcon1} alt = "walletIcon1" className = "mr-4" />
                        Formatic
                    </button>
                    <button className = "x-connect-wallet-button2 mb-4">
                        <img src = {walletIcon2} alt = "walletIcon1" className = "mr-4" />
                        Wallet connect
                    </button>
                    <button className = "x-connect-wallet-button3 mb-4">
                        <img src = {walletIcon3} alt = "walletIcon1" className = "mr-4" />
                        Coinbase Wallet
                    </button>
                    <button className = "x-connect-wallet-button4">
                        <img src = {walletIcon4} alt = "walletIcon1" className = "mr-4" />
                        My Ether Wallet
                    </button>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {6}>
                    <div className = "ml-5">
                        <img src = {walletImg} alt = "walletImg" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    metamask: state.metamask,
  });
  
  export default connect(
    mapStateToProps,
    {  }
  )(withRouter(ConnectWallet));