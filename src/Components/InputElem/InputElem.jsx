import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
} from '@material-ui/core';
import ToolTips from '../ToolTips';
// import './InputElem.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#e0e0e0',
   
   
  },
  margin: {
    margin: theme.spacing(1),
  },

  textField: {
    width: "90%",
  },
  input: {
    color: 'blue',
    textAlign: "right", 
    backgroundColor: "#e0e0e0"
  },
  inputAdornment: {
    // paddingRight: '1em',
    color: 'black'
  },

  
}));

const InputElem = ({
  text,
  description,
  value,
  unit,
  onChange
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.withoutLabel, classes.textField,)}
      // variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">{description}</InputLabel>
        <Input
          className={onChange && classes.input}
          value={value}
          classes={{input: classes.input}}
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

export default InputElem;
