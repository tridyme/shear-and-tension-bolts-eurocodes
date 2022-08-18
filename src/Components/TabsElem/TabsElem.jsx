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
import { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabsElem(props)

{

const {children} = props;
  return(
    <div> 
    <h1> {children}</h1>

    </div>)

}

export default TabsElem;