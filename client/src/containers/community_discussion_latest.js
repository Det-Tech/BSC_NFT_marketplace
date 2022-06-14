import React from 'react';
import {useHistory} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import AutoComplete from '../components/autocomplete_dropdown';
import LatestCard from '../components/discussion_latest_card';


function Discussion(){
    const history = useHistory();
    return(
        <div>
            <div className = "diceGrid-short">
                <div className = {window.innerWidth>560?"d-flex": ""}>
                    <button className = "x-home-filter-button" onClick = {()=>history.push('/discussion/categories')}>Categories</button>
                    <button className = "x-home-filter-button" onClick = {()=>history.push('/discussion/latest')}>Latest</button>
                    <button className = "x-home-filter-button" onClick = {()=>history.push('/discussion/categories')}>Top</button>
                    <AutoComplete />
                </div>
            </div>
            <div className = "diceGrid">
                <Grid container spacing = {3} className = "p-2">
                    <Grid item xs = {9} sm = {9} md = {9} className = "pl-4 pr-4 x-font-normal-yellow1">
                        Topic
                    </Grid>
                    <Grid item xs = {1} sm = {1} md = {1} className = "pl-4 pr-4 x-font-normal-yellow1">
                        Replies
                    </Grid>
                    <Grid item xs = {1} sm = {1} md = {1} className = "pl-4 pr-4 x-font-normal-yellow1">
                        Views
                    </Grid>
                    <Grid item xs = {1} sm = {1} md = {1} className = "pl-4 pr-4 x-font-normal-yellow1">
                        Activity
                    </Grid>
                </Grid>
                <LatestCard />
                <LatestCard />
                <LatestCard />
                <LatestCard />
                <LatestCard />
                <LatestCard />
                <LatestCard />
                <LatestCard />
            </div>
        </div>
    )
}

export default Discussion;