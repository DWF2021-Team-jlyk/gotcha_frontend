import React, { useState } from 'react';
import loadable from '@loadable/component';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const WorkSpaceAddModal = loadable(() => import('./WorkSpaceAddModal'));

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

const WorkSpaceAddButton = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const handleClose = () => {
    setClicked(false);
  };
  return (
    <>
      <Tooltip title="workspace add">
        <AddIcon style={{color:'white', fontSize:'2rem', marginLeft:10}} onClick={() => setClicked(true)} />
      </Tooltip>

      <WorkSpaceAddModal clicked={clicked} handleClose={handleClose} />
    </>
  );
};

export default WorkSpaceAddButton;
