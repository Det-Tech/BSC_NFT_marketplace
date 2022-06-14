import React, {useState} from 'react';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import { IconButton } from '@material-ui/core';
function FaqElement(){
    const [open, setOpen] = useState(false);
    const handleClickPlus = () =>{
        setOpen(!open);

    }
    return(
        <div>
            <div className = "x-font-normal-yellow1">
                <IconButton aria-label="upload picture" component="span" onClick = {handleClickPlus}>
                    {open?
                    <RemoveOutlinedIcon style = {{color: "#ef4a23"}}/>
                    :
                    <AddOutlinedIcon style = {{color: "#ef4a23"}}/>
                    }
                </IconButton>
                NFT? ERC-721 tokens? What is NFT marketplace? what is bictoin for?
            </div>
            {open?
                <div className = "x-faq-more-content x-font-normal-white">
                    NFT stands for non-fungible tokens like ERC-721(a smart contract standard) tokens which are hosted on Ethereum's own blockchain NFTs are unique digital items such as collectibles or artworks or game items. As an artist, by tokenizing your work you both ensure that it is unique and brand it as your work. The actual ownership is blockchain-managed.
                </div>
                :null
            }
            <hr />
        </div>
    )
}

export default FaqElement;