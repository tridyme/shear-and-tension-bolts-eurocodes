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
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import ToolTips from '../ToolTips';
import NumberFormat from 'react-number-format';
// import './InputElem.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'

  },
  margin: {
    margin: theme.spacing(1),
  },

  textField: {
    width: "100%",

  },
  input: {
    color: 'black',
    textAlign: "center",
    backgroundColor: "white",


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
  onChange,

}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container item spacing={2} alignContent="center" alignItems='center' >
        <Grid item xs={9}>
          <FormControl

            className={clsx(classes.margin, classes.withoutLabel, classes.textField,)}

          >

            <InputLabel htmlFor="outlined-adornment-amount">{description}</InputLabel>



            <NumberFormat
              customInput={TextField}
              variant="outlined"
              inputProps={{ style: { textAlign: 'center', } }}
              className={onChange && classes.input}
              value={value}
              classes={{ input: classes.input }}


              onChange={onChange}

            />
          </FormControl>
        </Grid>
        <Grid item xs={3} >
          <Typography >{unit}</Typography>
        </Grid>
      </Grid>

    </div>
  );
};

export default InputElem;
