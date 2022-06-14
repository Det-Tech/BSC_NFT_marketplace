import React from 'react';
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
  const {open, closeModal} = props;

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
        <DialogContent>
          <DialogContentText id="x-connect-wallet-modal-body">
            You should connect your wallet to sign messages and send transactions to ethereum network
          </DialogContentText>
        </DialogContent>
        <DialogActions id="x-connect-wallet-modal-footer">
          <button className = "x-connect-wallet-modal-footer-button" onClick={closeModal}>
            Connect Wallet
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
