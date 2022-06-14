import React from 'react';

function FirstCard(props){
    const {color} = props;
    return(
        <div className = 'x-container-padding mt-3' style = {{borderLeft: `4px solid #${color}`}}>
            <div className = "x-font-normal-white1">
                General Community<span className = "x-font-normal-yellow1 float-right">189<span className = "x-font-small-grey">/ week</span></span>
            </div>
            <div className = "x-font-small-grey">
                General community discussion topics and posts
            </div>
        </div>
    )
}

export default FirstCard;