import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import personImg from '../assets/img/avatar.png';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function SecondCard(){
    return(
        <div className = "x-container-padding row mt-3">
                <div className = "col-md-2 col-sm-2 col-xs-2">
                    <Avatar src = {personImg} alt="Remy Sharp" />
                </div>
                <div className = "col-md-8 col-sm-2 col-xs-2 x-font-normal-white text-left">
                    <div>Optimize your gas fees</div>
                    <div>
                        <FiberManualRecordIcon style = {{width: "11px", color: "green"}}/><span className = "x-font-small-grey">
                            General community
                        </span>
                    </div>
                </div>
                <div className = "col-md-2 col-sm-2 col-xs-2 text-right">
                    <div className = "x-font-small-grey">
                        345
                    </div>
                    <div className = "x-font-normal-yellow">
                        25m
                    </div>
                </div>
        </div>
    )
}

export default SecondCard;