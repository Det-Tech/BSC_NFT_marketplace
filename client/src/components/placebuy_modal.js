import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import diamond from '../assets/img/diamond.png';
import closeButton from '../assets/img/modal_close.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const {open, closeModal,handlePlaceBuy, handleApprove,step,handlePrice,handleTime} = props;

  const handleClickOpen = () => {
    
  };

  return (
    <div className = "x-connect-wallet-dialog">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeModal}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        id = "connect-wallet-modal"
      >
        <DialogTitle id="x-connect-wallet-modal-header">
            <img src = {diamond} alt = "diamond" />
            <img src = {closeButton} alt = "closeButton" className = "x-connect-wallet-header-close-button" onClick = {closeModal} />
        </DialogTitle>
        <DialogContent className = "x-onsale-modal-body">
          <DialogContentText>
            You should 
          </DialogContentText>
        </DialogContent>
        <DialogActions id="x-connect-wallet-modal-footer">
            <div style = {step == "1"?{display:'block'}:{display:"none"}}>
                <button className = "x-connect-wallet-modal-footer-button" onClick={handleApprove}>
                    Approve
                </button>
            </div>
            <div style = {step == "2"?{display:'block'}:{display:"none"}}>
                <button className = "x-connect-wallet-modal-footer-button" onClick={handlePlaceBuy}>
                    Place buy
                </button>
            </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
