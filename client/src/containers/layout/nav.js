import React, { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  InputBase
} from "@material-ui/core";
import Web3 from 'web3';
import MenuIcon from "@material-ui/icons/Menu"
import { Link as RouterLink } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch, connect} from 'react-redux';
import CommunityButton from '../../components/community_dropdown_button';
import UserInfoModal from '../../components/user_info_modal';


const useStyles = makeStyles((theme) => ({
  header: {
    paddingRight: "25px",
    paddingLeft: "25px",
    paddingBottom: 15,
    paddingTop: 30,
    borderBottom: '1px solid #2d216c',
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    cursor: 'pointer',
  },
  menuButton: {
    marginRight: "9px",
    fontSize: "12px",
    color: 'white'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  search: {
    borderRadius: 30,
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '35px',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  button: {
    textTransform: 'none',
    outline: 'none !important',
    color: 'white', 
    borderRadius: 20, 
    width: "21ch",
    height: '36px',
  },
}));

function Nav(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const metamaskState = useSelector(state => state.metamask);
  const metamask_state = metamaskState.metamaskState;
  const [myPubKey, setMyPubKey] = useState("");

  const [mobileView, setMobileView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setMobileView(true)
        : setMobileView(false)
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const create = () =>{
    history.push('/create');
  }
  const connect_wallet=()=>{
    history.push('/connect-wallet');
  }
  const toHome = () =>{
    history.push('/');
  }

  useEffect(async ()=>{
    var web3 = new Web3();
    web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
        setMyPubKey(accounts[0]);
        if (accounts.length == 0) 
            dispatch({type: 'CHANGE_METAMASKSTATE', payload: false});
        else {
            dispatch({type: 'CHANGE_METAMASKSTATE', payload: true});
        }
})

const headersData = [
  {
    label: "Explore",
    href: "/",
  },
  {
    label: "My items",
    href: `/${myPubKey}/my-item`,
  },
  {
    label: "Following",
    href: "/following",
  },
  {
    label: "Activity",
    href: "/activity",
  },
  {
    label: "How it works",
    href: "/faq",
  }
];

const headersDataMobile = [
  {
    label: "Explore",
    href: "/",
  },
  {
    label: "My items",
    href: `/${myPubKey}/my-item`,
  },
  {
    label: "Following",
    href: "/following",
  },
  {
    label: "Activity",
    href: "/activity",
  },
  {
    label: "How it works",
    href: "/faq",
  },
  {
    label: "Create",
    href: "/create",
  }
];

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className = {classes.logo} onClick = {toHome}>{Logo}</div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
        <div>{getMenuButtons()}</div>
        <CommunityButton />
        <div style={{ display: 'flex' }}>
          <Button className={classes.button} style={{ backgroundColor: '#3CBDFE', marginRight: '20px', }} variant="contained" onClick = {create}>
            Create
          </Button>
          <UserInfoModal metamaskState = {metamask_state} connect_wallet = {connect_wallet} />
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setDrawerOpen(true)
    const handleDrawerClose = () =>
      setDrawerOpen(false)

    return (
      <Toolbar className={classes.toolbar}>
        <div style={{ display: 'flex' }}>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
            <div className={classes.search} style = {{color: "blue"}}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Drawer>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className = {classes.logo}>{Logo}</div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
         
          <UserInfoModal metamaskState = {metamask_state} connect_wallet = {connect_wallet} />
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return(
      headersDataMobile.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
    )
  };

  const Logo = (
    <div>
      <img src="/logo.png" width = "50px"  onClick = {toHome}></img>
    </div>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <div>
      <div className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </div>
    </div>
  );
}

export default Nav;
