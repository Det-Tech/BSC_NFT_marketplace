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
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FollowingModal from '../components/following_modal';
import {testnet,web3, tokenAddress,artContract,myContract,artTokenAddress, gasLimitHex, MarketTokenAddress, MarketContract} from '../components/abi/contract';
import Loading from '../components/loading';
import Error404 from '../components/404';
import Axios from 'axios';

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
function Home(props) {
    const {match} = props;
    let {id} = match.params;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [followingOpen, setFollowingOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const [onSale,setOnSale] = useState([]);
  const [collectibles, setCollectibles] = useState([]);
  const [created, setCreated] = useState([]);
  const [onSaleFlag, setOnSaleFlag] = useState("null");
  const [collectibleFlag, setCollectibleFlag] = useState("null");
  const [createdFlag, setCreatedFlag] = useState("null");
  const [tab, setTab] = useState("2");
  const [avatarImg, setAvatarImg] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const closeModal = (event) => {
    setFollowingOpen(false);
  };

  const clipboard = ()=>{
    navigator.clipboard.writeText("0X3d6a89c8751a42302226193");
  }


useEffect(async ()=>{
    if(!flag){
      if(window.ethereum){
        setFlag(true);
        Axios.post("http://localhost:5000/api/users/get-my-profile", {publicKey: window.ethereum.selectedAddress})
        .then((res)=>{
            if(res){
                console.log(res.data);
                setAvatarImg(`http://localhost:5000/uploads/avatars/${res.data.file_path}`);
                setName(res.data.name);
                setBio(res.data.bio);
            }
        })
    }
      var artRes = await artContract.methods.totalSupply().call()
      var createdData = [];
      var onSaleData = [];
      var collectibleTempData = [];
      var collectibleData = [];
      for(var i = 0;i<artRes;i++){
        var CreatorAddress = await artContract.methods.createrOf(i).call();
        if(CreatorAddress.toUpperCase() == window.ethereum.selectedAddress.toUpperCase()){
          console.log(ownerAddress);
          var metaDataElement = await artContract.methods.tokenMetaData(i).call()
          console.log(metaDataElement);
          var metaParse = JSON.parse(`${metaDataElement}`);
          metaParse.id = i;
          createdData.push(metaParse);
        }
        var ownerAddress = await artContract.methods.ownerOf(i).call();
        console.log(ownerAddress, MarketTokenAddress);
        if(ownerAddress.toUpperCase() == MarketTokenAddress.toUpperCase()){
          var marketToken = await MarketContract.methods.orderByAssetId(artTokenAddress,i).call();
          if(marketToken.seller.toUpperCase()==window.ethereum.selectedAddress.toUpperCase()){
            var onSaleElement = await artContract.methods.tokenMetaData(i).call();
            var onSaleParse = JSON.parse(`${onSaleElement}`);
            onSaleParse.id = i;
            onSaleData.push(onSaleParse);
          }
        }
        if(ownerAddress.toUpperCase() == window.ethereum.selectedAddress.toUpperCase()){
            var collectibleElement = await artContract.methods.tokenMetaData(i).call();
            var collectibleParse = JSON.parse(`${collectibleElement}`);
            collectibleParse.id = i;
            collectibleTempData.push(collectibleParse);
          }
        }
        collectibleData = collectibleTempData.concat(onSaleData);
        if(onSaleData.length>0){
          setOnSale(onSaleData);
          setOnSaleFlag("exist");
        }
        else
          setOnSaleFlag("empty");
        if(collectibleData.length>0){
          setCollectibles(collectibleData);
          setCollectibleFlag("exist")
        }
        else
          setCollectibleFlag("empty");
        if(createdData.length>0){
          setCreated(createdData);
          setCreatedFlag("exist");
        }
        else
          setCreatedFlag("empty");
      }
    }
)

  

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
        <Avatar src={avatarImg} />
      </StyledBadge>
      </div>
      <div className='x-user-content'>
        <div className = "x-font-normal-white1 text-center">
          {name}
        </div>
        <div className = "x-font-short-white text-center">
            {window.ethereum? window.ethereum.selectedAddress: "please connect metamask!"}
            <FileCopyOutlinedIcon style = {{cursor: "pointer", marginLeft: "10px"}} onClick={clipboard} />
        </div>
        <div className = "x-font-short-white text-center mt-2">
            {bio}
        </div>
        <div className = "text-center mt-3 mb-5">
            <button className = 'x-user-followbutton mr-2' onClick = {()=>console.log(onSale[0])}>Follow</button>
            <button className = 'x-user-uploadbutton mr-2'><CloudUploadOutlinedIcon /></button>
            <button className = 'x-user-uploadbutton'><MoreHorizOutlinedIcon /></button>
        </div>
        <div className = {window.innerWidth>=600?"x-home-filter":null}>
          <button className = "x-home-filter-button" onClick = {()=>setTab("1")}>Onsale</button>
          <button className = "x-home-filter-button" onClick = {()=>setTab("2")}>Collectibles</button>
          <button className = "x-home-filter-button" onClick = {()=>setTab("3")}>Created</button>
          <button className = "x-home-filter-button" onClick = {()=>setTab("4")}>Liked</button>
          <button className = "x-home-filter-button" onClick = {()=>setTab("5")}>Activity</button>
          <button className = "x-home-filter-button" onClick = {()=>setFollowingOpen(true)}>Following</button>
          <button className = "x-home-filter-button" onClick = {()=>setTab("6")}>Followers</button>
        </div>
        <Grid container style={{padding: '20px 0'}}>
          {
            tab == "1"?
          (onSaleFlag=="exist"?
            (
              onSale.map((element)=>{
                return(
                <Grid lg={3} md={4} sm={6} xs={12}>
                  <Bid name={element.name} image={element.image} price = {element.price} modalKey = "2" id = {element.id}/>
                </Grid>
                )
              })
            ):onSaleFlag=="empty"?
            (
              <Error404 />
            ):
            (
              <Grid container>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
              </Grid>
            )
          ):tab == "2"?
          (collectibleFlag=="exist"?
            (
              collectibles.map((element)=>{
                return(
                  <Grid lg={3} md={4} sm={6} xs={12}>
                    <Bid name={element.name} image={element.image} price = {element.price} modalKey = "2" id = {element.id}/>
                  </Grid>
                )
              })
            ):collectibleFlag=="empty"?
            (
              <Error404 />
            ):
            (
              <Grid container>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
              </Grid>
            )
          ):tab == "3"?
          (createdFlag=="exist"?
            (
              created.map((element)=>{
                return(
                  <Grid lg={3} md={4} sm={6} xs={12}>
                    <Bid name={element.name} image={element.image} price = {element.price} modalKey = "2" id = {element.id}/>
                  </Grid>
                )
              })
            ):createdFlag=="empty"?
            (
              <Error404 />
            ):
            (
              <Grid container>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Loading />
                </Grid>
              </Grid>
            )
          ):null
          }
        </Grid>
      </div>
    </div>
  )
}
export default Home
