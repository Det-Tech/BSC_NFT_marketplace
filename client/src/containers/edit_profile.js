import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Grid, Avatar, makeStyles, TextField, InputAdornment} from '@material-ui/core';
import profileImg from '../assets/img/profileAvatar.png';
import Axios from 'axios';
import {useSelector, useDispatch, connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: "18vw",
      height: "18vw",
      display: "-webkit-inline-box!important"
    },
    normal: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px"
    },
    label : {
        marginBottom: '21px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: "rgb(53, 33, 157)",
        width: '165px',
        height: '45px',
        borderRadius: '50px',
        fontSize: '17px',
        color: "rgb(67, 190, 253)",
        lineHeight: 1.2,
    },
    inputField: {
        "& .MuiFormLabel-root": {
            color: "white"
          }
    },
    underline: {
        color: 'white' ,
        '&::after': {
          border: '0.5px solid white'
        }
      }
  }));

function Profile(){
    const history = useHistory();
    const classes = useStyles();
    const [flag, setFlag] = useState(true);
    const [previewImage, setPreviewImage] = useState(null);
    const [file, setFile] = useState();
    const [name, setName] = useState("");
    const [customUrl, setCustomUrl] = useState("");
    const [bio, setBio] = useState("");
    const [twitter, setTwitter] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);

    useEffect(()=>{
        if(flag){
            if(window.ethereum){
                setFlag(false);
                Axios.post("http://localhost:5000/api/users/get-my-profile", {publicKey: window.ethereum.selectedAddress})
                .then((res)=>{
                    if(res){
                        console.log(res.data);
                        setPreviewImage(`http://localhost:5000/uploads/avatars/${res.data.file_path}`);
                        setName(res.data.name);
                        setCustomUrl(res.data.customUrl);
                        setBio(res.data.bio);
                        setTwitter(res.data.twitter);
                        setPortfolio(res.data.portfolio);
                        setEmail(res.data.email);
                    }
                })
            }
        }
    })


    const handleUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setFile(event.target.files[0]);
        }
      }

    const handleValidUrl = (e) =>{
        setCustomUrl(e.target.value)
        if(window.ethereum){
            Axios.post("http://localhost:5000/api/users/valid-custom-url", {customUrl: e.target.value, publicKey: window.ethereum.selectedAddress})
            .then((res)=>{
                console.log(res.data);
                if(res.data.status=="exist"){
                    setStatus("custom url is exist");
                }
                else{
                    setStatus(null)
                }
            })
        }
    }

    const saveProfile = (e) =>{
        e.preventDefault();
        if(status==null&&name&&customUrl){
        var xhr = new XMLHttpRequest();
            const requestData = new FormData();
            requestData.append("avatar", file)
            requestData.append("name", name)
            requestData.append("bio", bio)
            requestData.append("customUrl", customUrl)
            requestData.append("twitter", twitter)
            requestData.append("portfolio", portfolio)
            requestData.append("email", email)
            requestData.append("publicKey", window.ethereum.selectedAddress)
            xhr.addEventListener("readystatechange", function() {
              if(this.readyState === XMLHttpRequest.DONE) {
                if(this.response.status === "error"){
                } else {
                  history.push('/');
                }
              } 
            });             

            xhr.open("POST", "http://localhost:5000/api/users/update-profile");
            xhr.send(requestData);
        }
    } 
    return(
        <div className = "diceGrid">
            <div className = "x-font-big-blue">
                Edit Profile
            </div>
            <div className = "x-font-normal-white mb-5">
                You can set preferred display name, create your branded profile URL and manage other personal settings
            </div>
            
            <Grid container spacing = {3}>
                <Grid item md = {4} sm = {12} xs = {12} className = "text-center">
                        <Avatar alt="avatar" src={previewImage==null? profileImg:previewImage} className={classes.large} />
                        <div className={classes.normal}>
                            <label htmlFor="file" className = {classes.label}>Choose file</label>
                            <input type="file" id="file" className = "d-none" onChange={handleUpload} />
                        </div>
                </Grid>
                <Grid item md = {8} sm = {12} xs = {12}>
                    <div className = "mb-5 mt-5">
                        <div className = "x-font-normal-yellow1">
                            Display name
                        </div>
                        <div className = "x-font-normal-white">
                            <TextField
                                className = {classes.inputField}
                                fullWidth 
                                variant = "standard" 
                                label="Enter your display name" 
                                value = {name}
                                onChange = {(e)=>setName(e.target.value)}
                                InputProps={{ classes: {underline: classes.underline} }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className = "x-font-normal-yellow1">
                            Bio
                        </div>
                        <div className = "x-font-normal-white">
                            <TextField
                                className = {classes.inputField}
                                fullWidth 
                                variant = "standard" 
                                label="Tell about yourself in a few words" 
                                value = {bio}
                                onChange = {(e)=>setBio(e.target.value)}
                                InputProps={{ classes: {underline: classes.underline} }}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className = "mt-5">
                <div className = "x-font-normal-yellow1 mb-3">
                    Custom URL
                </div>
                <div>
                    <TextField
                        fullWidth
                        label="Enter your custom URL"
                        variant = "standard"
                        value = {customUrl}
                        onChange = {(e)=>handleValidUrl(e)}
                        helperText={(() => {
                        if(status === "custom url is exist")
                        {
                            return "this url already exist"
                        }
                        return null;
                        })()}
                        className={classes.inputField}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">https://eastside.com/</InputAdornment>,
                            classes: {underline: classes.underline}
                        }}
                    />
                </div>
            </div>
            <div className = "mt-5">
                <div className = "x-font-normal-yellow1">
                    Twitter Username
                </div>
                <div className = "x-font-small-grey mb-3">
                    Link your Twitter account to gain more trust on the marketplace
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant = "standard"
                        className={classes.inputField}
                        value = {twitter}
                        onChange = {(e)=>setTwitter(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">@</InputAdornment>,
                            endAdornment: <InputAdornment position="end">Link</InputAdornment>,
                            classes: {underline: classes.underline}
                        }}
                    />
                </div>
            </div>
            <div className = "mt-5">
                <div className = "x-font-normal-yellow1 mb-3">
                    Personal site or portfolio
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant = "standard"
                        className={classes.inputField}
                        value = {portfolio}
                        onChange = {(e)=>setPortfolio(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">https://</InputAdornment>,
                            classes: {underline: classes.underline}
                        }}
                    />
                </div>
            </div>
            <div className = "mt-5">
                <div className = "x-font-normal-yellow1">
                    Email
                </div>
                <div className = "x-font-small-grey mb-3">
                    Your email for marketplace notifications
                </div>
                <div>
                    <TextField
                        fullWidth
                        variant = "standard"
                        className={classes.inputField}
                        value = {email}
                        onChange = {(e)=>setEmail(e.target.value)}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">Link</InputAdornment>,
                            classes: {underline: classes.underline}
                        }}
                    />
                </div>
                <div className = "x-font-small-grey mt-2">
                    You must sign message to view or manage your email. <span className = "x-font-normal-blue">Sign message</span>
                </div>
            </div>
            <div className = "x-font-normal-yellow1 mt-5">
                Verification
            </div>
            <Grid container spacing = {3}>
                <Grid item md = {8} sm = {8} xs = {8} className = "x-font-small-grey">
                    Proceed with verification process to get more visibility and gain trust on Rarible Marketplace. Please allow up to several weeks for the process.
                </Grid>
                <Grid item md = {4} sm = {4} xs = {4}>
                    <button  className = "x-get-verified-button">Get Verified</button>
                </Grid>
            </Grid>
            <div className = "mt-5">
                <button className = "x-product-place-bid-button x-font-normal-white1" onClick = {saveProfile}>Update Profile</button>
            </div>
        </div>
    )
}

export default Profile;