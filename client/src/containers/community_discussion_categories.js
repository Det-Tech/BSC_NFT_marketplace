import React from 'react';
import {useHistory} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import AutoComplete from '../components/autocomplete_dropdown';
import FirstCard from '../components/discussion_first_card';
import SecondCard from '../components/discussion_second_card';


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
            <Grid container spacing = {3} className = "diceGrid">
                <Grid item xs = {12} sm = {12} md = {6} className = "pl-4 pr-4">
                    <div className = 'x-font-big-blue'>
                        Category<span className = "float-right x-font-small-grey mt-3">Topics</span>
                    </div>
                    <div>
                        <FirstCard color = "3ab54a"/>
                        <FirstCard color = "0088cc"/>
                        <FirstCard color = "808281"/>
                        <FirstCard color = "0e76bd"/>
                        <FirstCard color = "92278f"/>
                        <FirstCard color = "bf1e2e"/>
                        <FirstCard color = "0088cc"/>
                    </div>
                </Grid>
                <Grid item xs = {12} sm = {12} md = {6} className = "pl-4 pr-4">
                    <div className = 'x-font-big-blue'>
                        Latest
                    </div>
                    <div>
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                        <SecondCard />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Discussion;