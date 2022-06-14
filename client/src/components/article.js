import React from "react";
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  articleRoot: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0'
  },
  article: {
    position: 'relative',
    height: 300,
    width: 250,
    fontFamily: 'Poppins'
    
  },
  text: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 3,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins'
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins'
  },
  description: {
    color: 'gray'
  },
  hoverZoom: {
    overflow: 'hidden',
    height: 300,
    width: 250,
    borderRadius: 10,
    cursor: 'pointer'
  },
  image: {
    transition: 'transform 0.4s ease',
    height: 300,
    width: 250,
    "&:hover": {
      transform: 'scale(1.1)'
    },
  }
}))
export default function Article(props) {
  const classes = useStyles();
  const history = useHistory();
  const {title, name, description, image} = props;
  const gotoProduct = () =>{
    history.push("/product");
  }

  return (
    <div className={classes.articleRoot} onClick = {gotoProduct}>
      <div className={classes.article}>
        <div className={classes.text}>
          <div className={classes.title}>{title}</div>
          <div className={classes.name}>{name}</div>
          <div className={classes.description}>{description}</div>
        </div>
        <div className={classes.hoverZoom}>
          <img className={classes.image} src={image}></img>
        </div>
      </div>
    </div>
  );
}