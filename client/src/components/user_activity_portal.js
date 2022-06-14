import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';

const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);

  const useStyles = makeStyles((theme)=>({
    fire: {
        width: 15,
        height: 20
      }
  }))

function ActivityPortal(){
    const classes = useStyles();
    return(
        <div className = "x-user-activity-portal d-flex">
            <Badge
                overlap="circle"
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                badgeContent={<SmallAvatar alt="Remy Sharp" src="/images/seller-1.png" />}
            >
                <Avatar alt="Travis Howard" src="/images/seller-1.png" />
            </Badge>
            <div className = "ml-4">
                <div className = "x-font-normal-white1">
                    Chubbies #7577
                </div>
                <div className = "x-font-normal-white">
                    transfered from <span className = "x-font-normal-blue">0xd0a28ebf4...9881</span> to <span><img className={classes.fire} src='/images/fire.png'></img></span><span className = "x-font-normal-yellow ml-2">Sadboi.eth</span>
                </div>
                <div className = "x-font-normal-white mt-3">
                    2 hours ago
                    <OpenInNewRoundedIcon />
                </div>
            </div>
        </div>
    )
} 
export default ActivityPortal;