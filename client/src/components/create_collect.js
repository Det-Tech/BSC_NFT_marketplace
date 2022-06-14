import React from 'react';
import {useHistory} from 'react-router-dom';

function Collect(props){
    const history  = useHistory();
    const {collectImg, collectUrl} = props;
    const imageClick = () =>{
        history.push(collectUrl);
    }
    return(
        <div className = "x-create-collect-img">         
                <img src = {collectImg} alt = "single" width = "100%" onClick={() => imageClick()}/>
        </div>
    )
}

export default Collect;