import React from "react";
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  collectionRoot: {
    padding: '10px 0'
  },
  collection: {
    position: 'relative',
    width: '100%',
    height: '100%'
    
  },
  text: {
    position: 'absolute',
    top: 50,
    left: 180,
    zIndex: 3
  },
  title: {
    color: 'white',
    fontSize: 18
  },
  name: {
    color: 'gray',
  },
  description: {
    color: 'gray'
  },
  hoverZoom: {
    marginRight: "10px",
    marginLeft: "10px",
    overflow: 'hidden',
    width: "100%",
    height: "100%",
    borderRadius: 10,
    cursor: 'pointer'
  },
  image: {
    width: "100%",
    height: 150,
    // transition: 'transform 0.4s ease',
    // "&:hover": {
    //   transform: 'scale(1.1)'
    // },
  }
}))
export default function Collection(props) {
  const classes = useStyles();
  const history = useHistory();
  const {image} = props;

  const gotoCollectionPage = () =>{
    history.push('/collection')
  }

  return (
    <div className={classes.collectionRoot} onClick = {gotoCollectionPage}>
      <div className={classes.collection}>
        <div className={classes.text}>
          <div className={classes.title}>Bipple Special Edition</div>
          <div className={classes.name}>Single Item</div>
        </div>
        <div className={classes.hoverZoom}>
          <img className={classes.image} src={image}></img>
        </div>
      </div>
    </div>
  );
}