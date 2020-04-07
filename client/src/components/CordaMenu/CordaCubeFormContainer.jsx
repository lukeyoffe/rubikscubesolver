import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CordaCubeForm from './CordaCubeForm.jsx';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    props.moveQueue.stop()
    setOpen(true);
  };

  const handleClose = () => {
    props.moveQueue.start()
    setOpen(false);
  };

  const onSubmit = () => {
    console.log(props.moveQueue.movesMade)
    Axios.post("http://localhost:10050/api/cube", {
      cubeId: props.selectedCube,
      moves: props.moveQueue.movesMade
    }).then(res => { 
      console.log(res)
      props.moveQueue.reset()
      handleClose() 
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <button className = "draw meet" onClick={handleOpen}>
        Save
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Are you sure?</h2>
            <CordaCubeForm 
              onSubmit= { onSubmit } 
              moveQueue= { props.moveQueue }
              selectedCube = { props.selectedCube }/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}