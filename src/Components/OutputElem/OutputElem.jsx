import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  OutlinedInput,
  TextField,
} from '@material-ui/core';
import ToolTips from '../ToolTips';
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
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  textField: {
    width: '100%',
    
  },
  input: {
    color: 'red',
    backgroundColor: "#e0e0e0",
    textAlign: "center", 
    fontWeight: 600, 
  },

  inputTwo: {
    color: 'green',
    backgroundColor: "#e0e0e0",
    textAlign: "center", 
    fontWeight: 600,
    // backgroundColor: 'lightblue'
  },
  inputAdornment: {
    // paddingRight: '1em',
    color: 'black'
  },


}));

const OutputElem = ({
  text,
  description,
  value,
  unit,
  onChange
}) => {
  const classes = useStyles();
  
  let isMoreThanOne = false

  value > 1 ? (isMoreThanOne = true) : (isMoreThanOne = false)
  
  return (
    <div className={classes.root}>
      
      <FormControl
        
        className={clsx(classes.input, classes.margin, classes.withoutLabel, classes.textField,)}
        
      >
        
        <InputLabel htmlFor="outlined-adornment-amount">{description}</InputLabel>
        <OutlinedInput
         
          className={onChange && classes.input}
          value={value}
          classes={isMoreThanOne ? ({input: classes.input}):({input: classes.inputTwo})}
          startAdornment={text &&
            <InputAdornment
              position="start"
              className={classes.inputAdornment}
            >
              {text}
              {(text && description) &&
                <ToolTips
                  description={description}
                  target={text}
                />
              }
            </InputAdornment>}
          endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
          onChange={onChange}
        /> 
      </FormControl>
     
    </div>
    
  


  );
};
export default OutputElem;
