import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';

const counts = [
 '2323 followers',
 '2323 followers',
 '2323 followers', 
 '2323 followers',
 '2323 followers'];
const names = ['Blocman'];

export default function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  const classes = useStyles();
  const {selectedValue } = props;

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title" className = "d-flex x-font-big-blue">
      Followings
      <button className = "x-following-modal-close-button d-inline" onClick = {handleCancel}><CloseIcon /></button>
      </DialogTitle>
      <List>
            {counts.map((count) => (
            <ListItem button onClick={() => handleListItemClick(count)} key={count}>
                <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                </ListItemAvatar>
                <div>   
                    <ListItemText primary={count} className = "x-followings-modal-first-text" />
                    <ListItemText primary={names} className = "x-followings-modal-second-text"/>
                </div>  
                <button className = "x-followings-modal-follow-button">follow</button>
            </ListItem>
            ))}
        </List>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
}));

