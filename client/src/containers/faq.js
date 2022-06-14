import React from 'react';
import FaqElement from '../components/faq_element';

function Faq(){
    return(
        <div>
            <div className = "diceGrid text-center">
                <div>
                    <img src = "/logo.png" alt = "logo" width = "100px" />
                </div>
                <div className = "x-font-big-white mb-5">
                    auctionhunt.com <span className = "x-font-orange-white">FAQ</span>
                </div>
                <div className = "x-font-big-blue mb-4">
                    Marketplace
                </div>
                <div className = "text-left">
                    <FaqElement />
                    <FaqElement />
                    <FaqElement />
                    <FaqElement />
                    <FaqElement />
                </div>
                <div className = "x-font-big-blue mt-5 mb-4">
                    Governance
                </div>
                <div className = "text-left">
                    <FaqElement />
                    <FaqElement />
                    <FaqElement />
                </div>
            </div>
        </div>
    )
}

export default Faq;