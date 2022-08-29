import calculations from '../../Views/BoltAnalysis/calculations';
import DataTestPylone from './pylone_test_1';
const tolerance = 0.01;
var data = require('./pylone_test_1').DataTestPylone;

const kOne = data.kOne; 
const d = data.d;
const alphaB = data.alphaB;
const alphaD = data.alphaD;
const fu = data.fu;
const fub = data.fub;
const tp = data.tp;
const GammaTwo = data.GammaTwo;
const LocationType = data.LocationType;
const eTwo = data.eTwo;
const eOne = data.eOne;
const pOne = data.pOne;
const pTwo = data.pTwo;
const D = data.D;
const BoltClass = data.BoltClass;
const FvEd = data.FvEd;



const ecartType = (value, target) => {
    return target !== 0 ? Math.abs((value - target) / target) : 0;
  }
  
  
  describe("Test Pylone N°1 - Test Case 510016 ", () => {
    it("Test N°1: Assemblages ", () => {
      // expect(ecartType(calculations.D({d:data.d}), data.D)).toBeLessThanOrEqual(tolerance);
      expect(ecartType(calculations.FbRd({kOne,eTwo,pTwo,alphaB,alphaD, LocationType,eOne,pOne,d,D, fu, fub, BoltClass, tp, GammaTwo}), data.FbRd)).toBeLessThanOrEqual(tolerance);
      expect(ecartType(calculations.SfFb({kOne,eTwo,pTwo,alphaB,alphaD, LocationType,eOne,pOne,d,D, fu, fub, BoltClass, tp, FvEd, GammaTwo}), data.SfFb)).toBeLessThanOrEqual(tolerance);
      
    });

  })
  

