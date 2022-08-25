import calculations from './calculations';
// inputs
 
const eOne = 50; 
const eTwo = 20;
const pOne = 100; 
const pTwo = 50 ; 
const d = 8;
const D = 9;
const As = 36.6;
const LocationType  = 1  ;
const LocationTypeTwo = 2 ; 
const tp = 8;
const BoltClass = 1 ;

const fu = 360 ;
const fub = 400 ;

const alphaD = 1.85;  
const alphaB = 1;  
const alphaV = 0.6; 
const kOne = 2.5;
const kTwo = 0.9;
const dM = 14 ; 

const GammaTwo = 1.0; 
const FvRd  = 8.78; 
const FtRd  = 13.18; 
const FbRd  = 57.60; 
const BpRd  = 76.03; 

const FvEd = 3.95;
const FtEd = 5.02;

const SfFv =  0.45; 
const SfFb = 0.07;
const SfFt = 0.38;
const SfBp = 0.07;
const SfFvFt = 0.72;
 
test('D Test', () => {
    const NewD = calculations.D({d})
    expect(NewD).toEqual(D) 

})

test('alphaV Test', () => {
    const NewalphaV = calculations.alphaV({BoltClass});
    expect(NewalphaV).toEqual(alphaV) 

})

test('kOne Test', () => {
    const NewkOne = calculations.kOne(({LocationType,eTwo,pTwo,d,D}));
    expect(NewkOne).toEqual(kOne) 

})

test('alphaD Test', () => {
    const NewalphaD = Number(calculations.alphaD(({LocationType,eOne,pOne,d,D})).toFixed(2));
    expect(NewalphaD).toEqual(alphaD) 

})

test('alphaB Test', () => {
    const NewalphaB = calculations.alphaB(({alphaD, LocationType,eOne,pOne,d,D, fu, fub, BoltClass}))
    expect(NewalphaB).toEqual(alphaB) 

})

test('dM Test', () => {
    const NewdM = Number(calculations.dM(({d})).toFixed())
    expect(NewdM).toEqual(dM) 

})

test('As Test', () => {
    const NewAs = calculations.As(({d}))
    expect(NewAs).toEqual(As) 

})

test('FvRd Test', () => {
    const NewFvRd = Number(calculations.FvRd(({alphaV,BoltClass,As,d,fub, GammaTwo})).toFixed(2))
    expect(NewFvRd).toEqual(FvRd) 

})


test('FtRd Test', () => {
    const NewFtRd = Number(calculations.FtRd(({kTwo,BoltClass,As,d,fub, GammaTwo})).toFixed(2))
    expect(NewFtRd).toEqual(FtRd) 

})

test('FbRd Test', () => {
    const NewFbRd = Number(calculations.FbRd(({kOne,eTwo,pTwo,alphaB,alphaD, LocationType,eOne,pOne,d,D, fu, fub, BoltClass, tp, GammaTwo})).toFixed(2))
    expect(NewFbRd).toEqual(FbRd) 

})


test('BpRd Test', () => {
    const NewBpRd = Number(calculations.BpRd(({d, tp, fu, tp,GammaTwo})).toFixed(2))
    expect(NewBpRd).toEqual(BpRd) 

})

test('SfFv Test', () => {
    const NewSfFv = Number(calculations.SfFv(({alphaV,BoltClass,As,d,fub, GammaTwo, FvEd})).toFixed(2))
    expect(NewSfFv).toEqual(SfFv) 

})

test('SfFb Test', () => {
    const NewSfFb = Number(calculations.SfFb(({kOne,eTwo,pTwo,alphaB,alphaD, LocationType,eOne,pOne,d,D, fu, fub, BoltClass, tp, FvEd, GammaTwo})).toFixed(2))
    expect(NewSfFb).toEqual(SfFb) 

})

test('SfFt Test', () => {
    const NewSfFt = Number(calculations.SfFt(({kTwo,BoltClass,As,d,fub, GammaTwo,FtEd})).toFixed(2))
    expect(NewSfFt).toEqual(SfFt) 

})

test('SfBp Test', () => {
    const NewSfBp = Number(calculations.SfBp(({d, tp, fu, tp,GammaTwo,FtEd})).toFixed(2))
    expect(NewSfBp).toEqual(SfBp) 

})

test('SfFvFt Test', () => {
    const NewSfFvFt = Number(calculations.SfFvFt(({kTwo, alphaV,BoltClass,As,d,fub, GammaTwo, FtEd,FvEd})).toFixed(2))
    expect(NewSfFvFt).toEqual(SfFvFt) 

})

test('fub Test', () => {
    const Newfub = calculations.fub(({BoltClass}))
    expect(Newfub).toEqual(fub) 

})









