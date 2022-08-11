import React, { useState } from 'react';
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,

} from '@material-ui/core';
import CardElem from '../../Components/CardElem';
import InputElem from '../../Components/InputElem';
import OutputElem from '../../Components/OutputElem';
import ToolTips from '../../Components/ToolTips';
import OutputDetails from '../../Components/OutputDetails';
import ChartElem from '../../Components/ChartElem';
import calculations from './calculations';
import MathJax from 'react-mathjax';
import { makeStyles } from '@material-ui/core/styles';


function SectionAnalysis() {
  const [values, setValues] = useState({
    
    // Geometry 
    eOne: 50,       
    eTwo: 80,         
    pOne: 100,        
    pTwo: 50,      
    tp: 8,
    d : 8,
    D : 10,
    As : 36.6, 
    LocationType : 1,
    LocationTypeTwo : 1,

    // Material
    BoltClass : 1 ,
    GammaTwo : 1 ,
    fub : 400, 
    fu : 360,

    FtEd : 5,
    FvEd : 5,

    // Results

    SfFv : 0.57,
    SfFb : 0.09,
    SfFt : 0.38, 
    SfBp : 0.07, 
    SfFvFt : 0.84, 

    // Complementary Calculations 

    FtRd : 13.18,
    FbRd : 57.60,
    FvRd : 8.78, 
    BpRd : 76.00, 
    dM : 14,
    alphaV : 0.60,
    alphaD :1.85,
    alphaB : 1.00,
    kOne : 2.50,
    kTwo : 0.90,

    OkNokSfFv : "OK",

    
  });

  

  const handleChangeValues = (prop) => (event) => {
    const newValues = { ...values, [prop]: Number(event.target.value) };

    const calculatedValues = calculations.outputs(newValues);

    const updatedValues = {
      ...newValues,
      ...calculatedValues
    }
    setValues(updatedValues);
  };


  const [dialogOpenGammaTwo, setDialogOpenGammaTwo] = useState(false);

  const [dialogOpeneOne, setDialogOpeneOne] = useState(false);


  const [dialogOpeneTwo, setDialogOpeneTwo] = useState(false);

  
  const [dialogOpenpOne, setDialogOpenpOne] = useState(false);

  
  const [dialogOpenpTwo, setDialogOpenpTwo] = useState(false);

  const [dialogOpenFtRd, setDialogOpenFtRd] = useState(false);

  const [dialogOpenFvRd, setDialogOpenFvRd] = useState(false);

  const [dialogOpenFbRd, setDialogOpenFbRd] = useState(false);

  const [dialogOpenBpRd, setDialogOpenBpRd] = useState(false);

  const [dialogOpenalphaV, setDialogOpenalphaV] = useState(false);
  
  const [dialogOpenalphaD, setDialogOpenalphaD] = useState(false);

  const [dialogOpenalphaB, setDialogOpenalphaB] = useState(false);

  const [dialogOpenkOne, setDialogOpenkOne] = useState(false);

  const [dialogOpenkTwo, setDialogOpenkTwo] = useState(false);

  const [dialogOpendM, setDialogOpendM] = useState(false);

  const FtRdFormula = [String.raw`FtRd=\frac{k_{2}f_{ub}A_{s}}{γ_{M2}}`];
  
  const FvRdFormula = [String.raw`FvRd=\frac{α_{v}f_{ub}A_{s}}{γ_{M2}}`];
  
  const FbRdFormula = [String.raw`FbRd=\frac{k_{1}α_{b}f_{u}dt}{γ_{M2}}`];
  
  const BpRdFormula = [String.raw`BpRd=\frac{0.6πd_{m}t_{p}f_{u}}{γ_{M2}}`];

  const xOne = 6;
  
  const xTwo = 3;

  const xThree = 3;

 
 

  return (
    <Grid container spacing={5} style={{display:'flex',justifyContent:'left',alignItems:'left'}}>
      
      <img src = "/images/header-texte.png" alt = ""/>
      <Grid container spacing={5} style={{display:'flex',justifyContent:'center',alignItems:'left'}}>
      <img src = "/images/image- entraxes des fixations.png" alt = ""/>
      </Grid>
      
      <Grid item md={12}  
       >
        <CardElem
          title="Geometry"
          
        >
          <Grid container = {true} alignItems="center" 
           >
            <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
              <TextField
              variant="outlined"
              defaultValue={"Distance along load direction : e1"}
              inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
              style={{height: '48px', width: '600px', justifyContent: 'center'}}
              />

            </Grid>
            
            <Grid item md ={xTwo}  >
              
              <InputElem
                
                value={values.eOne}
                // text={'e1'}
                // description={'Distance along load direction'}
                unit={'mm'}
                onChange={handleChangeValues('eOne')} 
              />
            </Grid>
            <Grid item md ={xThree}  style={{ backgroundColor: '#e0e0e0', display: "flex"}} >
              <TextField 
                variant="outlined"
                defaultValue={"Figure 3.1"}
                inputProps={{
                  readOnly : true,
                  style: {textAlign: 'center',  fontWeight: 600}
                  }}
              style={{
                  height: '48px',
                  width: '600px',
                  justifyContent: 'center',
                  borderStyle: 'solid',}}
              onClick={() => setDialogOpeneOne(true)}
              />
              <Dialog open={dialogOpeneOne} onClose={() => setDialogOpeneOne(false)}>
                <DialogTitle>Minimum end distance along load direction e1</DialogTitle>
                <DialogContent dividers>
                  <Typography style={{ fontWeight: 600 }} align="center" >Recommended value</Typography>
                  <Typography > e1 = 1.2d0 </Typography>
                  <Typography>where d0 = d + 2 with d as the bolt nominal diameter  </Typography>
                </DialogContent>
              </Dialog>
            </Grid>
          </Grid>
          <Grid container = {true} alignItems="center">
          
          <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
            <TextField
            variant="outlined"
            defaultValue={"Distance perpendicular to load direction : e2"}
            inputProps={{readOnly : true, style: {textAlign: 'left',  }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center',}}
            />
            </Grid>
          <Grid item md ={xTwo} > 
            <InputElem
              value={values.eTwo}
              unit={'mm'}
              onChange={handleChangeValues('eTwo')}
            />
          </Grid>
          <Grid item md ={xThree} style={{ display: "flex" }} >
            <TextField 
              variant = 'outlined'
              defaultValue={"Figure 3.1"}
              inputProps={{readOnly : true, style: {textAlign: 'center', fontWeight: 600 }}}
              style={{height: '48px', width: '600px',justifyContent: 'center'}}
              onClick={() => setDialogOpeneTwo(true)}
              />
            <Dialog open={dialogOpeneTwo} onClose={() => setDialogOpeneTwo(false)}>
              <DialogTitle>Minimum end distance perpendicular to load direction e2</DialogTitle>
              <DialogContent dividers>
                <Typography style={{ fontWeight: 600 }} align="center" >Recommended value  </Typography>
                <Typography > e2 = 1.2d0 </Typography>
                <Typography>where d0 = d + 2 with d as the bolt nominal diameter  </Typography>
              </DialogContent>
            </Dialog>
          </Grid>
          </Grid>

        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
            <TextField
            variant="outlined"
            defaultValue={"Spacing along load direction : p1"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
            </Grid> 
        <Grid item md ={xTwo}  > 
          <InputElem
            value={values.pOne}
            unit={'mm'}
            onChange={handleChangeValues('pOne')}
          />
        </Grid>
        <Grid item md ={xThree} style={{ display: "flex" }} >
          <TextField 
            variant='outlined'
            defaultValue={"Figure 3.1"}
            inputProps={{readOnly : true, style: {textAlign: 'center' , fontWeight: 600}}}
            style={{height: '48px', width: '600px',justifyContent: 'center'}}
            onClick={() => setDialogOpenpOne(true)}
            />
            <Dialog open={dialogOpenpOne} onClose={() => setDialogOpenpOne(false)}>
            <DialogTitle>Minimum center-to-center spacing along load direction p1</DialogTitle>
            <DialogContent dividers>
              <Typography style={{ fontWeight: 600 }} align="center">Recommended value </Typography>
              <Typography> p1 = 2.2d0</Typography>
              <Typography>where d0 = d + 2 with d as the bolt nominal diameter  </Typography>
            </DialogContent>
          </Dialog>
          </Grid>
          </Grid>

        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
            <TextField
            variant="outlined"
            defaultValue={"Spacing perpendicular to load direction : p2"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
            </Grid>
        <Grid item md ={xTwo} > 
          <InputElem
            value={values.pTwo}
            unit={'mm'}
            onChange={handleChangeValues('pTwo')}
          />
          </Grid>
          <Grid item md ={xThree} style={{ display: "flex" }} >
          <TextField 
            variant = 'outlined'
            defaultValue={"Figure 3.1"}
            inputProps={{readOnly : true,style: {textAlign: 'center' , fontWeight: 600}}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenpTwo(true)}
            />
            <Dialog open={dialogOpenpTwo} onClose={() => setDialogOpenpTwo(false)}>
            <DialogTitle>Minimum center-to-center spacing perpendicular to load direction p2 [mm]</DialogTitle>
            <DialogContent dividers>
              <Typography style={{ fontWeight: 600 }} align="center">Recommended value </Typography>
              <Typography >   p2 = 2.4d0 </Typography>
              <Typography>where d0 = d + 2 with d as the bolt nominal diameter  </Typography>
            </DialogContent>
            </Dialog>
            </Grid>
          </Grid>

        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
          variant="outlined"
          defaultValue={"Position of the bolt along load direction"}
          inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
          style={{height: '48px', width: '600px', justifyContent: 'center'}}
          />
        </Grid>
        <Grid item md ={xTwo} > 
          <FormControl fullWidth style={{ padding: '6px',textAlign: "center"}} variant = 'outlined'>
            <Select
              style={{ backgroundColor:'white' }}
              value={values.LocationType}
              onChange={handleChangeValues('LocationType')}
              >
                <MenuItem value = {1}>Edge bolts</MenuItem> 
                <MenuItem value = {2}>Inner bolts</MenuItem>
            </Select>
          </FormControl> 
        </Grid>
        </Grid>

        <Grid container = {true} alignItems="center" >
        <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
          variant="outlined"
          defaultValue={"Position of the bolt perpendicular to load direction"}
          inputProps={{readOnly : true, style: {textAlign: 'left' },}}
          style={{height: '48px', width: '600px', justifyContent: 'center'}}
          />
        </Grid>
        <Grid item md = {xTwo}> 
          <FormControl fullWidth style={{ padding: '6px', textAlign: "center"}} variant = 'outlined'>
            <Select
            style={{ backgroundColor:'white' }}
            value={values.LocationTypeTwo}
            onChange={handleChangeValues('LocationTypeTwo')}
            >
            <MenuItem value = {1}>Edge bolts</MenuItem> 
            <MenuItem value = {2}>Inner bolts</MenuItem>
            </Select>
          </FormControl>  
        </Grid>
        </Grid>

        <Grid container = {true}>
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
          variant="outlined"
          defaultValue={"Thickness of the connected plate : tp"}
          inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
          style={{height: '48px', width: '600px', justifyContent: 'center'}}
          />
        </Grid>

        <Grid item md = {xTwo}> 
          <InputElem
            value={values.tp}
            unit={'mm'}
            onChange={handleChangeValues('tp')}
          />
        </Grid >
        </Grid>

        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
          variant="outlined"
          defaultValue={"Diameter of the bolt : d"}
          inputProps={{readOnly : true, style: {textAlign: 'left' }}}
          style={{height: '48px', width: '600px', justifyContent: 'center'}}
          />
        </Grid>

        <Grid item md = {xTwo} >
          <FormControl fullWidth style={{ padding: '6px'}} variant = 'outlined'>
            <Select
              value={values.d}
              onChange={handleChangeValues('d')}
              style={{ backgroundColor:'white' ,textAlign: "center"}}
            >
              <MenuItem value = {5}>5</MenuItem> 
              <MenuItem value = {6}>6</MenuItem>
              <MenuItem value = {7}>7</MenuItem>
              <MenuItem value = {8}>8</MenuItem> 
              <MenuItem value = {10}>10</MenuItem>
              <MenuItem value = {12}>12</MenuItem>
              <MenuItem value = {14}>14</MenuItem>
              <MenuItem value = {16}>16</MenuItem>
              <MenuItem value = {18}>18</MenuItem> 
              <MenuItem value = {20}>20</MenuItem>
              <MenuItem value = {22}>22</MenuItem>
              <MenuItem value = {24}>24</MenuItem>
              <MenuItem value = {27}>30</MenuItem>
              <MenuItem value = {33}>33</MenuItem> 
              <MenuItem value = {36}>36</MenuItem>
              <MenuItem value = {39}>39</MenuItem>

            </Select>
          </FormControl> 
          </Grid>
          </Grid>
          </CardElem>
          </Grid>

      <Grid item md={12}>
          <CardElem
            title="Material"
            subtitle=""
          >
          
          <Grid container = {true} alignItems="center">
          <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Class of the bolt"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center',}}
            />
          </Grid>
          <Grid item md = {xTwo}> 
            <FormControl fullWidth style={{ padding: '6px'}} variant = 'outlined' > 
            <Select
              value={values.BoltClass}
              onChange={handleChangeValues('BoltClass')}
              style={{ backgroundColor:'white',textAlign: "center" }}
            >
          <MenuItem value = {1} >4.6</MenuItem>
          <MenuItem value = {2} >4.8</MenuItem>
          <MenuItem value = {3} >5.6</MenuItem>
          <MenuItem value = {4} >5.8</MenuItem>
          <MenuItem value = {5} >6.8</MenuItem>
          <MenuItem value = {6} >8.8</MenuItem>
          <MenuItem value = {7} >10.9</MenuItem>
          
        </Select>
        </FormControl>
        </Grid>
          <Grid item md ={xThree}  style={{ display: "flex" }} >
          <TextField 
            
            variant='outlined'
            margin="normal"
            defaultValue={"§3.1"}
            inputProps={{readOnly : true,style: {textAlign: 'center' }}}
            style={{height: '31px', width: '600px',justifyContent: 'center'}}
            />
          </Grid>
        </Grid>


        <Grid container = {true} alignItems="center">
         
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Partial safety factor for the resistance of bolts : yM2"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
          />
        </Grid>
          <Grid item md = {xTwo}>  
            <InputElem
              value={values.GammaTwo}
              onChange={handleChangeValues('GammaTwo')}
              unit={''}
            />
          </Grid>
          <Grid item md ={xThree}  style={{ display: "flex" }} >
            <TextField 
              variant='outlined'
              defaultValue={"§2.2"}
              inputProps={{readOnly : true,style: {textAlign: 'center' , fontWeight: 600 }}}
              style={{height: '48px', width: '600px',justifyContent: 'center'}}
              onClick={() => setDialogOpenGammaTwo(true)}
            />
             <Dialog open={dialogOpenGammaTwo} onClose={() => setDialogOpenGammaTwo(false)}>
                <DialogTitle>Partial safety factor for the resistance of bolts</DialogTitle>
                <DialogContent dividers>
                  <Typography style={{ fontWeight: 600 }} align="center">Recommended value </Typography>
                  <Typography> γM2 = 1.25</Typography>
                </DialogContent>
              </Dialog>

            </Grid>
          </Grid>
        <Grid container = {true} alignItems="center"  >
        <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
            <TextField
              variant="outlined"
              defaultValue={"Ultimate tensile strength of the connected plate : fu"}
              inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
              style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
        <Grid item md = {xTwo}>
          <InputElem
            value={values.fu}
            unit={'MPa'}
            onChange={handleChangeValues('fu')}
          />

        </Grid>
        <Grid item md ={xThree} style={{ display: "flex" }} >
          <TextField 
            variant='outlined'
            defaultValue={"Table 3.1"}
            inputProps={{readOnly : true, style: {textAlign: 'center' }}}
            style={{height: '48px',width: '600px', justifyContent: 'center'}}
            />
            </Grid>
        </Grid>

        <Grid container = {true} alignItems="center">
      
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Design tension force : FtEd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
          <Grid item md = {xTwo}>
          <InputElem
            value={values.FtEd}
            unit={'kN'}
            onChange={handleChangeValues('FtEd')}
            />
          </Grid>
          </Grid>
          
        <Grid container = {true}>
        <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Design shear force : FvEd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
        <Grid item md = {xTwo}>
        
          <InputElem
            value={values.FvEd}
            unit={'kN'}
            onChange={handleChangeValues('FvEd')}
        />
        </Grid>
        </Grid>
        </CardElem>
        </Grid>
      <Grid item md={12}>
        <CardElem
          title="Results"
          subtitle=""
        >
      <Grid container = {true} alignItems="center" > 
      <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Safety factor for shear stress : FvEd / FvRd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            
            />
        </Grid>
      <Grid item md = {xTwo} >
        <OutputElem
          value={values.SfFv}
          unit={''}
          onChange={handleChangeValues('SfFv')}
          
          
        />
      </Grid>
      <Grid item md = {xThree} > 
      <ToolTips
        value={values.SfFv}
      /> 
      </Grid>
      </Grid>
      <Grid container = {true} alignItems="center" >
      <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Safety factor for bearing stress : FvEd / FbRd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
        </Grid>

      <Grid item md = {xTwo}>
        <OutputElem
          value={values.SfFb}
          unit={''}
          onChange={handleChangeValues('SfFb')}
       

        />
      </Grid>

      <Grid item md = {xThree} > 
        <ToolTips
          value={values.SfFb}
        /> 
        </Grid>
      </Grid>

      <Grid container = {true} alignItems="center" >
      <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Safety factor for tension stress : FtEd / FtRd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
        </Grid>
        <Grid item md = {xTwo} >
          
        <OutputElem
          value={values.SfFt}
          unit={''}
          onChange={handleChangeValues('SfFt')}
        />
        
        </Grid>

        <Grid item md = {xThree} > 
        <ToolTips
          value={values.SfFt}
        /> 
        </Grid>
      </Grid>

      <Grid container = {true} alignItems="center" >
      <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Safety factor for punching stress : FtEd / BpRd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
        </Grid>
        <Grid item md = {xTwo}> 

        <OutputElem
          value={values.SfBp}
          unit={''}
          onChange={handleChangeValues('SfBp')}
        />
        </Grid>
        <Grid item md = {xThree} > 
        <ToolTips
          value={values.SfBp}
        /> 
        </Grid>
      </Grid>

      <Grid container = {true} alignItems="center">
      <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Safety factor shear-tension stress : FvEd/FvRd + FtEd / (1.4FtRd)"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
        </Grid>
        <Grid item md = {xTwo}>       
        <OutputElem
          value={values.SfFvFt}
          onChange={handleChangeValues('SfFvFt')}
          unit={''}
        />
       </Grid>
       <Grid item md = {xThree} > 
        <ToolTips
          value={values.SfFvFt}
        /> 
        </Grid>
      </Grid>
        </CardElem>
      </Grid>
      <Grid item md={12}>
        <CardElem
          title="Calculations details"
          subtitle=""
        >


        <Grid container = {true} alignItems="center">
          <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Diameter of the bolt hole : D "}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
          />
          </Grid>
          <Grid item md = {xTwo}>
          <OutputDetails
            value={values.D}
            unit={'mm'}
            onChange={handleChangeValues('D')}
          />
          </Grid>
          </Grid>

          <Grid container = {true} alignItems="center" >
          <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Stress area of the bolt : As"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
          <Grid item md = {xTwo}> 
          <OutputDetails
            value={values.As}
            unit={'mm²'}
            onChange={handleChangeValues('As')}
          /> 
          </Grid>
          </Grid>
        <Grid container = {true} alignItems="center">
            
            <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
              <TextField
                variant="outlined"
                defaultValue={"Ultimate tensile strength of the bolt : fub"}
                inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
                style={{height: '48px', width: '600px', justifyContent: 'center'}}
              />
            </Grid>
            <Grid item md = {xTwo}>
              <OutputDetails
                value={values.fub}
                unit={'MPa'}
                onChange={handleChangeValues('fub')}
              />
            </Grid>
            <Grid item md ={xThree}  style={{ display: "flex" }} >
              <TextField 
                variant='outlined'
                defaultValue={"Table 3.1"}
                inputProps={{readOnly : true,style: {textAlign: 'center' , fontWeight: 600}}}
                style={{height: '48px',width: '600px',justifyContent: 'center'}}
              />
              </Grid>
          </Grid>
        < Grid container =  {true} alignItems="center">

        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Tensile strength : FtRd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
        </Grid>

          <Grid item md = {xTwo}>
          <OutputDetails
            value={values.FtRd}
            unit={'kN'}
            onChange={handleChangeValues('FtRd')}
            
            
          />
          </Grid>
          <Grid item md ={xThree} style={{ display: "flex"}} >
          <TextField 
            variant='outlined'
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true, style: {textAlign: 'center'  , fontWeight: 600}}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenFtRd(true)}
          />
          <Dialog open={dialogOpenFtRd} onClose={() => setDialogOpenFtRd(false)}>
            <DialogTitle>Tensile strength of bolts</DialogTitle>
            <DialogContent dividers  >
            <Typography align="center"  style={{ fontWeight: 600}}> Table 3.4 </Typography>
            <MathJax.Provider>
            <div>
              <p> <MathJax.Node formula={FtRdFormula} /></p>
              <hr></hr>
            </div>
            </MathJax.Provider>
            </DialogContent>
          </Dialog>
          </Grid>
        </Grid>
        
        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Shear resistance : FvRd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
        </Grid>

          <Grid item md = {xTwo}>
          <OutputDetails
            value={values.FvRd}
            unit={'kN'}
            onChange={handleChangeValues('FvRd')}
          />
          </Grid>
          <Grid item md ={xThree} style={{ display: "flex"}} >
          <TextField
            variant='outlined' 
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true, style: {textAlign: 'center'  , fontWeight: 600}}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenFvRd(true)}
          />
          <Dialog open={dialogOpenFvRd} onClose={() => setDialogOpenFvRd(false)}>
            <DialogTitle>Shear strength of bolts</DialogTitle>
            <DialogContent dividers  >
            <Typography  align="center"  style={{ fontWeight: 600 }} > Table 3.4 </Typography>
            <MathJax.Provider>
            <div>
              <p> <MathJax.Node formula={FvRdFormula} /></p>
              <hr></hr>
            </div>
            </MathJax.Provider>
            </DialogContent>
          </Dialog>
          </Grid>
        </Grid>

        <Grid container = {true} alignItems="center" >
        <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Bearing strength : FbRd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
        </Grid>
          <Grid item md = {xTwo}> 
          <OutputDetails
            value={values.FbRd}
            unit={'kN'}
            onChange={handleChangeValues('FbRd')}
          />
          </Grid>

          <Grid item md ={xThree} style={{ display: "flex"}} >
            <TextField 
            variant='outlined'
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true,style: {textAlign: 'center' , fontWeight: 600 }}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenFbRd(true)}
            />
            <Dialog open={dialogOpenFbRd} onClose={() => setDialogOpenFbRd(false)}>
            <DialogTitle>Bearing strength of bolts</DialogTitle>
            <DialogContent dividers  >
            <Typography  align="center" style={{ fontWeight: 600 }} > Table 3.4 </Typography>
            <MathJax.Provider>
            <div>
              <p> <MathJax.Node formula={FbRdFormula} /></p>
              <hr></hr>
            </div>
            </MathJax.Provider>
            </DialogContent>
            </Dialog>
            </Grid>
        </Grid>

        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Punching strength : BpRd"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
          <Grid item md = {xTwo}> 
          <OutputDetails
            value={values.BpRd}
            unit={'kN'}
            onChange={handleChangeValues('BpRd')}
          />
         </Grid>
         <Grid item md ={xThree} style={{ display: "flex"}} >
            <TextField 
            variant='outlined'
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true, style: {textAlign: 'center' , fontWeight: 600 }}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenBpRd(true)}
            />
            <Dialog open={dialogOpenBpRd} onClose={() => setDialogOpenBpRd(false)}>
            <DialogTitle>Punching strength of bolts</DialogTitle>
            <DialogContent dividers  >
            <Typography  align="center" style={{ fontWeight: 600,  }} > Table 3.4 </Typography>
            <MathJax.Provider>
            <div>
              <p> <MathJax.Node formula={BpRdFormula} /></p>
              <hr></hr>
            </div>
            </MathJax.Provider>
            </DialogContent>
          </Dialog>
          </Grid>
        </Grid>
        
        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Coefficient related to the bolt class : alphaV"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
          <Grid item md = {xTwo}>    
          <OutputDetails
            value={values.alphaV}
            onChange={handleChangeValues('alphaV')} 
            unit={''}
          />
          </Grid> 
          <Grid item md ={xThree}  style={{ display: "flex"}} >
            <TextField 
            variant='outlined'
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true, style: {textAlign: 'center' , fontWeight: 600 }}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenalphaV(true)}
            />
            <Dialog open={dialogOpenalphaV} onClose={() => setDialogOpenalphaV(false)}>
            <DialogTitle>Coefficient αv </DialogTitle>
            <DialogContent dividers>
              <Typography  style={{ fontWeight: 600 }} align="center" >Recommended values</Typography>
              <Typography> alphaV = 0.6 for bolts class equal to 4.6, 5.6 and 8.8</Typography>
              <Typography> alphaV = 0.5 for bolts class equal to 4.8, 6.8 and 10.9</Typography>
            </DialogContent>
            </Dialog>
            </Grid>
        </Grid>

        <Grid container = {true} alignItems="center" >
          
        <Grid item md ={xOne} style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
          <TextField
            variant="outlined"
            defaultValue={"Coefficient related to the bolt location : k1"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
          <Grid item md = {xTwo}>
          <OutputDetails
            value={values.kOne}
            onChange={handleChangeValues('kOne')} 
            unit={''}
          />
          </Grid>
          <Grid item md ={xThree} style={{ display: "flex"}} >
            <TextField
            variant='outlined' 
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true,style: {textAlign: 'center'  , fontWeight: 600}}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenkOne(true)}
            />
            <Dialog open={dialogOpenkOne} onClose={() => setDialogOpenkOne(false)}>
              <DialogTitle>Coefficient k1 </DialogTitle>
              <DialogContent dividers>
                <Typography   style={{ fontWeight: 600 }} align="center">Recommended values</Typography>
                <Typography> For edge  bolts : min(2.8e2/D - 1.7 ; 2.5 ) </Typography>
                <Typography> For inner bolts : min(1.4p2/D - 1.7 ; 2.5) </Typography>
              </DialogContent>
            </Dialog>
            </Grid>
        </Grid>

        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
        <TextField
            variant="outlined"
            defaultValue={"Coefficient related to the bolt location : k2"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>

          < Grid item md = {xTwo}>    
          <OutputDetails
            value={values.kTwo}
            onChange={handleChangeValues('kTwo')} 
            unit={''}
          />
          </Grid>

          <Grid item md ={xThree}  style={{ display: "flex"}} >
            <TextField 
            variant='outlined'
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true, style: {textAlign: 'center'  , fontWeight: 600}}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenkTwo(true)}
            />
            <Dialog open={dialogOpenkTwo} onClose={() => setDialogOpenkTwo(false)}>
            <DialogTitle>Coefficient k2 </DialogTitle>
            <DialogContent dividers>
              <Typography  style={{ fontWeight: 600 }} align="center" >Recommended values</Typography>
              <Typography> For countersunk bolts : 0.63   </Typography>
              <Typography> Otherwise : 0.9 : </Typography>
              </DialogContent>
            </Dialog>
          </Grid>
          
        </Grid>
        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
        <TextField
            variant="outlined"
            defaultValue={"Coefficient related to the bolt location : alphaD"}
            inputProps={{readOnly : true, style: {textAlign: 'left' },}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>

          <Grid item md = {xTwo}>
          <OutputDetails
            value={values.alphaD}
            onChange={handleChangeValues('alphaD')} 
            unit={''}
          />
          </Grid>

          <Grid item md ={xThree}  style={{ display: "flex"}} >
            <TextField 
            variant='outlined'
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true, style: {textAlign: 'center'  , fontWeight: 600}}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenalphaD(true)}
            />
            <Dialog open={dialogOpenalphaD} onClose={() => setDialogOpenalphaD(false)}>
            <DialogTitle>Coefficient alphaD </DialogTitle>
            <DialogContent dividers>
              <Typography style={{ fontWeight: 600 }} align="center">Recommended values</Typography>
              <Typography> For edge  bolts : e1/(3D) </Typography>
              <Typography> For inner bolts : p1/(3D) - 1/4 </Typography>
            </DialogContent>
            </Dialog>
          </Grid>
        </Grid>

        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
        <TextField
            variant="outlined"
            defaultValue={"Coefficient related to the bolt location : alphaB"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
          <Grid item md = {xTwo} >
          <OutputDetails
            value={values.alphaB}
            onChange={handleChangeValues('alphaB')} 
            unit={''}
          />  
          </Grid>
          <Grid item md ={xThree} style={{ display: "flex"}} >
            <TextField 
            variant='outlined'
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true,style: {textAlign: 'center'  , fontWeight: 600}}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpenalphaB(true)}
            />
            <Dialog open={dialogOpenalphaB} onClose={() => setDialogOpenalphaB(false)}>
            <DialogTitle>Coefficient alphaB </DialogTitle>
            <DialogContent dividers>
              <Typography style={{ fontWeight: 600 }} align="center" >Recommended values</Typography>
              <Typography> min (alphaD ; fub/fu ; 1.0) </Typography>
            </DialogContent>
            </Dialog>
          </Grid>
          
        </Grid>
        <Grid container = {true} alignItems="center">
        <Grid item md ={xOne}  style={{ backgroundColor: '#e0e0e0' , display: "flex"}} >
        <TextField
            variant="outlined"
            defaultValue={"Mean diameter of the bolt: dm"}
            inputProps={{readOnly : true, style: {textAlign: 'left' }, }}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            />
          </Grid>
          <Grid item md = {xTwo}>
          <OutputDetails
            value={values.dM}
            onChange={handleChangeValues('dM')} 
            unit={''}
          />
          </Grid>

          <Grid item md ={xThree}  style={{ display: "flex"}} >
          <TextField 
            variant = 'outlined'
            defaultValue={"Figure 3.4"}
            inputProps={{readOnly : true, style: {textAlign: 'center' , fontWeight: 600 }}}
            style={{height: '48px', width: '600px', justifyContent: 'center'}}
            onClick={() => setDialogOpendM(true)}
          />
          <Dialog open={dialogOpendM} onClose={() => setDialogOpendM(false)}>
            <DialogTitle>Coefficient dM </DialogTitle>
            <DialogContent dividers>
              <Typography style={{ fontWeight: 600 }} align="center" >Recommended values</Typography>
              <Typography> d = 1.07735s where s is the distance across flats  </Typography>
            </DialogContent>
          </Dialog>
          </Grid> 
        </Grid>
        </CardElem>
      </Grid>
    </Grid >
  );
}

export default SectionAnalysis;

