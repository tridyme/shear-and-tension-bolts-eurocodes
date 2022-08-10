import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  OutlinedInput,
} from '@material-ui/core';

// import './InputElem.css';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#e0e0e0',

    
  },

  margin: {
    margin: theme.spacing(1),
  },



  customAlert : {
    color : "black",
    },

 

}));

const ToolTips = ({
  text,
  description,
  value,
  unit,
  onChange
}) => {
  const classes = useStyles();

  

  if (value > 1) {
  return (
    <div className={classes.root}>
      <FormControl  fullWidth
       className={clsx(classes.margin)} 
       >
      <Alert severity="error" variant="filled"  className= {classes.customAlert}> NOK </Alert>

      </FormControl>
    </div>
  );
  }

  if (value < 1) {
    return (
      <div className={classes.root}>
        <FormControl fullWidth 
        className={clsx(classes.margin)} 
        > 
        <Alert severity="success" variant="filled" className= {classes.customAlert}> OK </Alert>
        </FormControl>
      </div>
    );
    }


};
export default ToolTips;