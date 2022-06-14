import React from 'react';
import {Grid} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import personImg from "../assets/img/avatar.png";

function LatestCard(){
    return(
            <Grid container spacing = {3} className = "p-2 x-discussion-latest-card mb-3">
                <Grid item xs = {6} sm = {6} md = {6} className = "pl-4 pr-4">
                    <div className = "x-font-normal-white1">
                        Shard and follow let the good energy flow
                    </div>
                    <div>
                        <FiberManualRecordIcon style = {{width: "11px", color: "green"}}/><span className = "x-font-small-grey">
                            General community
                        </span>
                    </div>
                </Grid>
                <Grid item xs = {3} sm = {3} md = {3} className = "pl-4 pr-4 x-font-normal-yellow1">
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src={personImg} />
                    <Avatar alt="Travis Howard" src={personImg} />
                    <Avatar alt="Cindy Baker" src={personImg} />
                    <Avatar alt="Agnes Walker" src={personImg} />
                    <Avatar alt="Trevor Henderson" src={personImg} />
                </AvatarGroup>
                </Grid>
                <Grid item xs = {1} sm = {1} md = {1} className = "pl-4 pr-4 x-font-normal-grey">
                    758
                </Grid>
                <Grid item xs = {1} sm = {1} md = {1} className = "pl-4 pr-4 x-font-normal-grey">
                    579
                </Grid>
                <Grid item xs = {1} sm = {1} md = {1} className = "pl-4 pr-4 x-font-normal-grey">
                    2m
                </Grid>
            </Grid>
    )
}

export default LatestCard;