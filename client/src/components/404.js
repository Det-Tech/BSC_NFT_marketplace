import React from 'react';
import error404 from '../assets/img/404.png';

function Error404(){
    return(
        <div className = "diceGrid text-center">
            <img src = {error404} alt = "error404" width = "100%" />
            <div className = "x-font-normal-white1">
                No items Found
            </div>
            <div className = "x-font-normal-yellow">
                Come back soon!<span className = "x-font-small-grey">
                    Or try to browse something for you or our marketplace
                </span>
            </div>
            <div className = "mt-4">
                <button className = "x-collection-browse-marketplace-button">
                    Browse marketplace
                </button>
            </div>
        </div>
    )
}

export default Error404;