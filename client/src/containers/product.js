import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import {Grid} from '@material-ui/core';
import gameController1 from '../assets/img/game_controller1.png';
import paintImg from '../assets/img/paint.png';
import personImg from '../assets/img/avatar.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import BuyModal from '../components/placebuy_modal';
import {testnet,web3, tokenAddress,artContract,myContract,artTokenAddress,MarketTokenAddress, MarketContract, gasLimitHex} from '../components/abi/contract';

function Product(props){
    const {match} = props;
    let {id} = match.params;

    const history = useHistory();
    const [flag, setFlag] = useState(false);
    const [option, setOption] = useState('info');
    const [collectible, setCollectible] = useState([]);
    const [creatorPublicKey, setCreatorPublicKey] = useState();
    const [description, setDescription] = useState();
    const [creatorKey, setCreateKey] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [step, setStep] = useState("1");
    const [buttonType, setButtonType] = useState("1");

    useEffect(async () =>{
        console.log("ok");
        if(!flag){
            var ownerAddress = await artContract.methods.ownerOf(id).call();
            console.log(ownerAddress);
            if(ownerAddress.toUpperCase() == MarketTokenAddress.toUpperCase()){
                var order = await MarketContract.methods.orderByAssetId(artTokenAddress,id).call()
                console.log(order);
                var creator = await artContract.methods.createrOf(id).call();
              var metaDataElement = await artContract.methods.tokenMetaData(id).call()
              console.log(metaDataElement);
              var metaParse = JSON.parse(`${metaDataElement}`);
              metaParse.id = id;
              metaParse.owner = order.seller;
              metaParse.creator = creator;
              metaParse.price = web3.utils.fromWei(order.price);
              setCollectible(metaParse)
              console.log(metaParse)
              setFlag(true);
            }
        }
      },[])

    const handlePlaceBuy = async () =>{
        if (window.ethereum) {

            let data = MarketContract.methods.Buy(artTokenAddress, id, web3.utils.toWei(collectible.price.toString())).encodeABI();
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
    }

    const handleOpenModal = () =>{
        setModalOpen(true);
    }
    const handleCloseModal = () =>{
        setModalOpen(false);
    }

    const handleApprove = async () =>{
        console.log("okok");
        console.log(id);
        if(id!=null){
          var data = myContract.methods.approve(MarketTokenAddress, web3.utils.toWei(collectible.price.toString())).encodeABI();
          var artTxdetail = {
            from: window.ethereum.selectedAddress,
            to: tokenAddress,
            value: web3.utils.toHex(web3.utils.toWei("0")),
            gas: gasLimitHex,
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            data:data
          }
          window.ethereum.request({ method: 'eth_sendTransaction', params: [artTxdetail] }).then(async (res) => {
            console.log(res);
                 var ethFlag1 = true;
                 while(ethFlag1){
                await web3.eth.getTransactionReceipt(res, (error, receipt) => {
                      if (error) {
                          console.log(error)
                      } else if (receipt == null) {
                              console.log("repeat")
                      } else {
                         console.log("confirm", receipt)
                         setStep("2");
                         ethFlag1 = false;
                      }
                  });
                }
          })
        }
    
      }
    const optionContent = (
        option === "info" ?(
            <div>
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4 x-width-180">
                        <div className = "x-font-normal-blue">
                            Creator
                        </div>
                        <div className = "x-font-normal-white" style = {{wordWrap: "break-word"}}>
                            {collectible.creator}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = "d-flex mb-4">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4 x-width-180">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white" style = {{wordWrap: "break-word"}}>
                            {collectible.owner}
                        </div>
                    </div>
                </div>
            </div>
            ):option === "owners" ?(
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            ):option === "history" ?(
            <div>
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = "d-flex mb-4">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            </div>
            ):option === "details" ?(
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            ):option === "bids" ?(
            <div>
                <div className = "d-flex mb-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            {}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className = "d-flex mb-4">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                    <div className = "ml-4">
                        <div className = "x-font-normal-blue">
                            owner
                        </div>
                        <div className = "x-font-normal-white">
                            velvet
                        </div>
                    </div>
                </div>
            </div>
            ):null
    )
    return(
        <div>
            <Grid container spacing = {3} className = "diceGrid">
                <BuyModal open = {modalOpen} closeModal = {handleCloseModal} step = {step} handleApprove = {handleApprove} handlePlaceBuy = {handlePlaceBuy}/>
                <Grid item md = {7} sm = {12} xs = {12}>
                    <img src = {collectible.image} alt = "product" className = "x-product-img" />
                    <div className = "text-right mt-4 mb-5">
                        <button className = "x-heart-round-transparent-button ml-3"><FavoriteIcon /></button>
                        <button className = "x-zoom-round-transparent-button ml-3"><ZoomOutMapIcon /></button>
                    </div>
                    <div className = "x-font-normal-white">
                        we use
                        <img src = {gameController1} alt = "game-controller" className = "ml-1 mr-2"/>
                        .
                        <span className = "x-font-small-grey">Learn more x</span>
                    </div>
                </Grid>
                <Grid item md = {5} sm = {12} xs = {12} className = "pl-5">
                    <div className = "x-font-big-blue d-inline mr-2">
                        Pickin's up the Tinseltown Dips
                    </div>
                    <div className = "d-inline">
                        <button className = "x-more-round-transparent-button mr-1"><MoreHorizIcon /></button>
                        <button className = "x-upload-round-transparent-button"><CloudUploadIcon /></button>
                    </div>
                    <div className = "x-font-normal-yellow mb-2">
                        Not for sale <span className = "x-font-small-grey">1 of 1</span>
                    </div>
                    <div>
                        <button className = "x-radius-transparent-button mr-3"><img src = {paintImg} alt = "paint-img" /> Art </button>
                        <button className = "x-radius-transparent-button"><img src = {gameController1} alt = "game-controller" /> Games </button>
                    </div>
                    <div className = "x-font-normal-white mb-4 mt-2">
                        {description}
                        <br />
                        {/* <span className = "x-font-small-grey"> Read more</span> */}
                    </div>
                    <div className = {window.innerWidth>=600?"x-home-filter":null}>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("info")}>Info</button>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("owners")}>Owners</button>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("history")}>History</button>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("details")}>Details</button>
                        <button className = "x-home-filter-button" onClick = {()=>setOption("bids")}>Bids</button>
                    </div>
                    <hr/>
                    {optionContent}
                    <div className = "x-product-bid-container">
                        <div>
                            <Avatar src = {personImg} alt="Remy Sharp" className = "d-inline-block" />
                            <div className = "d-inline-block">
                                <div className = "x-font-normal-white">
                                    Highest bid by <span className = "x-font-normal-yellow">DonDoom</span>
                                </div>
                                <div className = "x-font-normal-blue1">
                                    {collectible.price?`${collectible.price}`:0} WBNB <span className = "x-font-normal-grey">$62.96</span>
                                </div>
                            </div>
                        </div>
                        <div className = "mt-2">
                                <button className = "x-product-place-bid-button x-font-normal-white" onClick = {handleOpenModal}>Place buy</button>
                        </div>
                        {/* <div className = "mt-2">
                                <button className = "x-product-place-bid-button x-font-normal-white" onClick = {handleOpenModal}>Place bid</button>
                        </div> */}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Product;