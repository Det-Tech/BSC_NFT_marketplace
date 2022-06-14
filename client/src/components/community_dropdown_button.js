import React from 'react';
import {useHistory} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {FaTwitter} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaDiscord} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaMediumM} from 'react-icons/fa';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const gotoRari= () =>{
      history.push('/discussion/categories');
      setAnchorEl(null);
    }
  const gotoDiscussion = () =>{
    history.push('/discussion/categories');
    setAnchorEl(null);
    }
  const gotoVoting = () =>{
    history.push('/discussion/categories');
    setAnchorEl(null);
    }

const gotoSuggest = () =>{
    history.push('/discussion/categories');
    setAnchorEl(null);
}
const gotoSubscribe = () =>{
    history.push('/discussion/categories');
    setAnchorEl(null);
}

  return (
    <div>
      <Button
        onClick={handleClick}
        className = "x-community-open-button"
      >
        Community
      </Button>
      <StyledMenu
        id="x-customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className = "x-community-open-button-content">
            <div className = "x-community-open-button-item pl-4 pr-4" onClick = {gotoDiscussion}>
                <ListItemText primary="RARI Token" />
            </div>
            <div className = "x-community-open-button-item pl-4 pr-4" onClick = {gotoDiscussion}>
                <ListItemText primary="Discussion"/>
            </div>
            <div className = "x-community-open-button-item pl-4 pr-4" onClick = {gotoDiscussion}>
                <ListItemText primary="Voting" />
            </div>
            <div className = "x-community-open-button-item pl-4 pr-4" onClick = {gotoDiscussion}>
                <ListItemText primary="Suggest feature" />
            </div>
            <div className = "x-community-open-button-item pl-4 pr-4" onClick = {gotoDiscussion}>
                <ListItemText primary="Subscribe" />
            </div>
            <hr />
            <div className = "pl-4 pr-4">
                <FaTwitter className = "mr-3 x-cursor-pointer x-light-blue-color"/>
                <FaTelegramPlane className = "mr-3 x-cursor-pointer x-light-blue-color"/>
                <FaInstagram className = "mr-3 x-cursor-pointer x-light-blue-color"/>
                <FaDiscord className = "mr-3 x-cursor-pointer x-light-blue-color"/>
                <FaYoutube className = "mr-3 x-cursor-pointer x-light-blue-color"/>
                <FaMediumM className = "mr-3 x-cursor-pointer x-light-blue-color"/>
            </div>
        </div>
      </StyledMenu>
    </div>
  );
}
