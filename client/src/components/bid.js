import React,{useState} from "react";
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import {Favorite, MoreVert} from '@material-ui/icons'
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import OnSaleModal from '../components/onSale';
import {testnet,web3, tokenAddress,artContract,myContract,artTokenAddress,MarketTokenAddress, MarketContract, gasLimitHex} from './abi/contract';


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
    cursor: 'pointer',
  },
  iconMore: {
    zIndex: 3,
    position: 'relative',
    float:"right",
    color: 'white',
    outline: 'none !important'
  },
  image: {
    transition: 'transform 0.4s ease',
    height: 200,
    width: 280,
    "&:hover": {
      transform: 'scale(1.1)'
    },
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

export default function Bid(props) {
  const history = useHistory();
  const classes = useStyles();
  var {name, image, modalKey, creatorPubKey,price,nftId,id} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const open = Boolean(anchorEl);
  const [closeDiag, setCloseDiag] = useState(false);
  const [step, setStep] = useState("1");
  const [newPrice, setnewPrice] = useState(price);
  const [time, setTime] = useState("");


  // setCloseDiag(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOnSale = async () => {
    setAnchorEl(null);
      if (window.ethereum) {
        
        console.log(artTokenAddress, id, web3.utils.toWei(newPrice.toString()),time);
        let data = MarketContract.methods.createOrder(artTokenAddress, id, web3.utils.toWei(newPrice.toString()),time).encodeABI();
        


        var txdetail = {
            //"nonce":'0x' + lastCountOfTransaction.toString(16),
          // nonce: '0x00',
            from: window.ethereum.selectedAddress,
            to: MarketTokenAddress,
            value: web3.utils.toHex(web3.utils.toWei("0")),
            gas: gasLimitHex,
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            data:data
          }
        
        console.log(txdetail);
        //chain_id
        //const sign_data = await window.ethereum.request({ method: 'personal_sign', params: [JSON.stringify(txdetail), web3.givenProvider.selectedAddress] });
        
        
      window.ethereum.request({ method: 'eth_sendTransaction', params: [txdetail] }).then(async (res) => {
          console.log('res ',res);
            var ethFlag = true;
              while(ethFlag){
              await web3.eth.getTransactionReceipt(res, (error, receipt) => {
                    if (error) {
                        console.log(error)
                    } else if (receipt == null) {
                            console.log("repeat")
                    } else {
                      console.log("confirm", receipt)
                      ethFlag = false;
                      setModalOpen(false);
                    }
                });
              }
    });


  }

  };

  const closeModal = () =>{
    setModalOpen(false);
    setCloseDiag(false);
    setAnchorEl(null);
    setStep('1');
  }
  const openModal = () =>{
    setModalOpen(true);
    setCloseDiag(true);
  }

  const handleApprove = async () =>{
    console.log("okok");
    console.log(id);
    if(id!=null){
      var data = artContract.methods.approve(MarketTokenAddress, id).encodeABI();
      var artTxdetail = {
        from: window.ethereum.selectedAddress,
        to: artTokenAddress,
        value: web3.utils.toHex(web3.utils.toWei("0")),
        gas: gasLimitHex,
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data:data
      }
      window.ethereum.request({ method: 'eth_sendTransaction', params: [artTxdetail] }).then(async (res) => {
        console.log(res);
             var ethFlag = true;
             while(ethFlag){
            await web3.eth.getTransactionReceipt(res, (error, receipt) => {
                  if (error) {
                      console.log(error)
                  } else if (receipt == null) {
                          console.log("repeat")
                  } else {
                     console.log("confirm", receipt)
                     setStep("2");
                     ethFlag = false;
                  }
              });
            }
      })
    }

  }

  const handlePrice = (e) =>{
    setnewPrice(e.target.value);
  }

  const handleTime = (e) =>{
    console.log(e.target.value)
    var date = new Date(e.target.value);
    var seconds = date.getTime();
    setTime(seconds);
  }

  return (
    <div className={classes.bidRoot}>
    <OnSaleModal open = {modalOpen} closeModal = {closeModal} handleOnSale = {handleOnSale} handleApprove = {handleApprove} step = {step} handlePrice = {handlePrice} handleTime = {handleTime}/>
      <div className={classes.bid}>
        <div className = {classes.bidTop}>
        <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.iconMore}
          >
            <MoreVert />
          </IconButton>
          
            {closeDiag == false&&modalKey == "1" ? (options1.map((option) => (
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                    backgroundColor: "#02f0fe"
                  },
                }}
              >
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option}
                </MenuItem>
              </Menu>
            ))
            ): closeDiag == false&&modalKey == "2" ?
            (<div>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                    backgroundColor: "#02f0fe"
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  Share
                </MenuItem>
                <MenuItem onClick={openModal}>
                  On Sale
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  Report
                </MenuItem>
              </Menu>
            </div>
            )
            : closeDiag == false&&modalKey == "3" ?
            (options3.map((option) => (
              
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))
            )
            : null

            }
          <img className={classes.seller1} src='/images/seller-1.png'></img>
          <img className={classes.seller2} src='/images/seller-2.png'></img>
          {/* <img className={classes.check} src='/images/check.png'></img> */}
        </div>
        <div className={classes.hoverZoom}>
          <img className={classes.image} src={image} onClick = {()=>{history.push(`/product/${id}`)}}></img>
        </div>
        <div className={classes.text}>
          <div className={classes.name}>{name}</div>
          <div style={{fontSize: 13}}>
            <span style={{color: 'green', paddingRight: 20}}>{`${price} WBNB`}</span>
            <span style={{color: 'gray'}}>1 of 1</span>
          </div>
          <div style={{fontSize: 13}}>
            <span style={{color: 'white'}}>Highest Bid</span>
            <span style={{color: '#1199cb'}}>0 WBNB</span>
          </div>
          <Favorite className={classes.iconHeart} />
        </div>
      </div>
    </div>
  );
}