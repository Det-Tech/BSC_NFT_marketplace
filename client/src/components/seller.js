import React from "react";
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import {Star, MoreVert} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  bidRoot: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
    cursor: "pointer"
  },
  bid: {
    width: 250,
    height: 100,
    backgroundColor: '#160b4c',
    display: 'flex',
    borderRadius: 10,
    position: 'relative'
  },
  text: {
    zIndex: 3,
    padding: '10px 20px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  iconStar: {
    position: 'absolute',
    right: 5,
    top: 5,
    fontSize: 30,
    color: '#1a1e7d',
    position: 'absolute'
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins'
  },
  value: {
    color: 'yellow',
    fontSize: 15,
    fontFamily: 'Poppins'
  },
  hoverZoom: {
    padding: 10,
    overflow: 'hidden',
    position: 'relative',
    height: 100,
    width: 100,
    cursor: 'pointer',
    borderRadius: 10,
  },
  iconMore: {
    zIndex: 3,
    position: 'absolute',
    right: 10,
    top: 20,
    color: 'white',
    outline: 'none !important',
    position: 'relative'
  },
  check: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  image: {
    height: 80,
    width: 80,
    // transition: 'transform 0.4s ease',
    // "&:hover": {
    //   transform: 'scale(1.1)'
    // },
  }
}))
const options = [
  'None',
  'Atria',
  'Callisto',
];
const ITEM_HEIGHT = 48;

export default function Seller(props) {
  const history = useHistory();
  const classes = useStyles();
  const {name, value, image} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUser = () =>{
    history.push('/user/collectible');
  }

  return (
    <div className={classes.bidRoot} onClick = {handleUser}>
      <div className={classes.bid}>
        <div className={classes.hoverZoom}>
          <img className={classes.image} src={image}></img>
          <img className={classes.check} src='/images/check.png'></img>
        </div>
        <div className={classes.text}>
          <div>
            <div className={classes.name}>{name}</div>
            <div className={classes.value}>{value}</div>
          </div>
        </div>
        <Star className={classes.iconStar} />
      </div>
    </div>
  );
}