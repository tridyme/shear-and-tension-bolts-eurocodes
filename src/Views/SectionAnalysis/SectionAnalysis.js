import React, { useState } from 'react';
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  TextField,

} from '@material-ui/core';
import CardElem from '../../Components/CardElem';
import InputElem from '../../Components/InputElem';
import ChartElem from '../../Components/ChartElem';
import calculations from './calculations';


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



  return (
    <Grid container spacing={3}>
      <Grid item md={12} 
       >
        <CardElem
          title="Geometry"
        >
          <InputElem
            value={values.eOne}
            text={'e1'}
            description={'Distance along load direction'}
            unit={'mm'}
            onChange={handleChangeValues('eOne')}
            
          />
          <InputElem
            value={values.eTwo}
            text={'e2'}
            description={'Distance perpendicular to load direction'}
            unit={'mm'}
            onChange={handleChangeValues('eTwo')}
            />
          <InputElem
            value={values.pOne}
            text={'p1'}
            description={'Center-to-center spacing along load direction'}
            unit={'mm'}
            onChange={handleChangeValues('pOne')}
          />
          <InputElem
            value={values.pTwo}
            text={'p2'}
            description={'Center-to-center spacing perpendicular to load direction'}
            unit={'mm'}
            onChange={handleChangeValues('pTwo')}
          />
          <InputElem
            value={values.LocationType}
            text={'LocationType'}
            description={'1 for Edge bolts / 2 for Inner bolts'}
            unit={''}
            onChange={handleChangeValues('LocationType')}
          /> 
          <InputElem
            value={values.LocationTypeTwo}
            text={'LocationTypeTwo'}
            description={' 1 for Edge bolts / 2 for Inner bolts'}
            unit={''}
            onChange={handleChangeValues('LocationTypeTwo')}
          />
          <InputElem
            value={values.tp}
            text={'tp'}
            description={'Thickness of the connected plate'}
            unit={'mm'}
            onChange={handleChangeValues('tp')}
          />
          <FormControl style={{minWidth: 1080}} >
            <InputLabel id = "demo-simple-semect-label">Diameter of the bolt (mm)</InputLabel>
            <Select
              value={values.d}
              onChange={handleChangeValues('d')}
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
          <InputElem
            value={values.D}
            text={'D'}
            description={'Diameter of the bolt hole'}
            unit={'mm'}
            onChange={handleChangeValues('D')}
          />
          <InputElem
            value={values.As}
            text={'As'}
            description={'Stress area of the bolt'}
            unit={'mm²'}
            onChange={handleChangeValues('As')}
          /> 
          </CardElem>
          </Grid>

          <Grid item md={12}>
          <CardElem
            title="Material"
            subtitle=""
          >
          <InputElem
            value={values.BoltClass}
            text={'BoltClass'}
            description={'1 for 4.6/5.6/8.8 - 2 for 4.8/5.8/6.8/10.9'}
            unit={''}
            onChange={handleChangeValues('BoltClass')}
          />
          <InputElem
            value={values.GammaTwo}
            text={'yM2'}
            description={'Partial safety factor for the resistance of bolts'}
            unit={''}
            onChange={handleChangeValues('GammaTwo')}
          />
          <InputElem
            value={values.fub}
            text={'fub'}
            description={'Ultimate tensile strength of the bolt'}
            unit={'MPa'}
            onChange={handleChangeValues('fub')}
          />
          <InputElem
            value={values.fu}
            text={'fu'}
            description={'Ultimate tensile strength of the connected plate'}
            unit={'MPa'}
            onChange={handleChangeValues('fu')}
          />
          <InputElem
            value={values.FtEd}
            text={'FtEd'}
            description={'Design tension force'}
            unit={'kN'}
            onChange={handleChangeValues('FtEd')}
            />
          <InputElem
            value={values.FvEd}
            text={'FvEd'}
            description={'Design shear force'}
            unit={'kN'}
            onChange={handleChangeValues('FvEd')}
        />
        </CardElem>
      </Grid>
      <Grid item md={12}>
        <CardElem
          title="Results"
          subtitle=""
        >
        <InputElem
          value={values.SfFv}
          text={'SfFv'}
          description={'Safety factor for shear stress'}
          unit={''}
          onChange={handleChangeValues('SfFv')}
        />
        <InputElem
          value={values.SfFb}
          text={'SfFb'}
          description={'Safety factor for bearing stress'}
          unit={''}
          onChange={handleChangeValues('SfFb')}
        />
        <InputElem
          value={values.SfFt}
          text={'SfFt'}
          description={'Safety factor for tension stress'}
          unit={''}
          onChange={handleChangeValues('SfFt')}
        />
        <InputElem
          value={values.SfBp}
          text={'SfBp'}
          description={'Safety factor for punching stress'}
          unit={''}
          onChange={handleChangeValues('SfBp')}
        />
        <InputElem
          value={values.SfFvFt}
          text={'SfFvFt'}
          description={'Safety factor for combined shear and tension stress'}
          unit={''}
          onChange={handleChangeValues('SfFvFt')}
        />
       
        </CardElem>
      </Grid>
      <Grid item md={12}>
        <CardElem
          title="Complementary calculations"
          subtitle=""
        >
          <InputElem
            value={values.FtRd}
            text={'FtRd'}
            description={'Tensile strength'}
            unit={'kN'}
            onChange={handleChangeValues('FtRd')}
          />
          <InputElem
            value={values.FvRd}
            text={'FvRd'}
            description={'Shear resistance'}
            unit={'kN'}
            onChange={handleChangeValues('FvRd')}
          />
          <InputElem
            value={values.FbRd}
            text={'FbRd'}
            description={'Bearing strength'}
            unit={'kN'}
            onChange={handleChangeValues('FbRd')}
          />
          <InputElem
            value={values.BpRd}
            text={'BpRd'}
            description={'Punching strength'}
            unit={'kN'}
            onChange={handleChangeValues('BpRd')}
          />
          <InputElem
            value={values.alphaV}
            text={'alphaV'}
            description={'Coefficient related to the bolt class'}
            onChange={handleChangeValues('alphaV')} 
          />
          <InputElem
            value={values.kOne}
            text={'k1'}
            description={'Coefficient related to the bolt location'}
            onChange={handleChangeValues('kOne')} 
          />
          <InputElem
            value={values.kTwo}
            text={'k2'}
            description={'Coefficient related to the bolt location'}
            onChange={handleChangeValues('kTwo')} 
          />
          <InputElem
            value={values.alphaD}
            text={'alphaD'}
            description={'Coefficient related to the bolt location'}
            onChange={handleChangeValues('alphaD')} 
          />
          <InputElem
            value={values.alphaB}
            text={'alphaB'}
            description={'Coefficient related to the bolt location'}
            onChange={handleChangeValues('alphaB')} 
          />
          <InputElem
            value={values.dM}
            text={'dM'}
            description={'Mean diameter of the bolt'}
            onChange={handleChangeValues('dM')} 
          />
        </CardElem>
      </Grid>
    </Grid >
  );
}

export default SectionAnalysis;

