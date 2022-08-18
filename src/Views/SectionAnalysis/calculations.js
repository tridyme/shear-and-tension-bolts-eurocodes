const Data ={  
  "5": {
      "Size": 5.00,
      "d": 5.00,
      "s": 8.00,
      "As": 14.2,
      "D" : 6,
  },
  "6": {
      "Size": 6.00,
      "d": 6.00,
      "s": 10.00,
      "As": 20.1,
      "D" : 7,
  },
  "7": {
      "Size": 7.00,
      "d": 7.00,
      "s": 11.00,
      "As": 28.9,
      "D" : 8,
  },
  "8": {
      "Size": 8.0,
      "d": 8.00,
      "s": 13.00,
      "As": 36.60,
      "D" : 9,
  },
  "10": {
      "Size": 10.00,
      "d": 10.00,
      "s": 16.00,
      "As": 58.0,
      "D" : 11,
  },

  "12": {
      "Size": 12.00,
      "d": 12.00,
      "s": 18.00,
      "As": 84.30,
      "D" : 13,
  },
  "14": {
      "Size": 14.00,
      "d": 14.00,
      "s": 21.00,
      "As": 115.00,
      "D" : 15,
  },
  "16": {
      "Size": 16.00,
      "d": 16.00,
      "s": 24.00,
      "As": 157.00,
      "D" : 18,
  },
  "18": {
      "Size": 18.00,
      "d": 18.00,
      "s": 27.00,
      "As": 192.00,
      "D" : 20,
  },
  "20": {
      "Size": 20.00,
      "d": 20.00,
      "s": 30.00,
      "As": 245.00,
      "D" : 22,
  },
  "22": {
      "Size": 22.00,
      "d": 22.00,
      "s": 34.00,
      "As": 303.00,
      "D" : 24,
  },
  "24": {
      "Size": 24.00,
      "d": 24.00,
      "s": 36.00,
      "As": 353.00,
      "D" : 26,
  },
  "27": {
      "Size": 27.00,
      "d": 27.00,
      "s": 41.00,
      "As": 459.00,
      "D" : 30,
  },
  "30": {
      "Size": 30.00,
      "d": 30.00,
      "s": 46.00,
      "As": 561.00,
      "D" : 33,
  },
  "33": {
      "Size": 33,
      "d": 33,
      "s": 50,
      "As": 694,
      "D" : 36,
  },
  "36": {
      "Size": 36,
      "d": 36,
      "s": 55,
      "As": 817,
      "D" : 39,
  },
  "39": {
      "Size": 39,
      "d": 39,
      "s": 60,
      "As": 976,
      "D" : 42,
  }
};

const calculations = {
  // OUTPUTS
  outputs: (inputs) => {
    return {

      
      alphaV : calculations.alphaV(inputs),
      alphaD : calculations.alphaD(inputs),
      alphaB : calculations.alphaB(inputs),
      kOne : calculations.kOne(inputs),
      kTwo : calculations.kTwo(inputs), 
    
      D : calculations.D(inputs),
      dM : calculations.dM(inputs),
      As : calculations.As(inputs),

      FvRd: calculations.FvRd(inputs),
      FtRd: calculations.FtRd(inputs),
      FbRd: calculations.FbRd(inputs),
      BpRd: calculations.BpRd(inputs),

      SfFv : calculations.SfFv(inputs),
      SfFb : calculations.SfFb(inputs),
      SfFt : calculations.SfFt(inputs),
      SfBp : calculations.SfBp(inputs),
      SfFvFt : calculations.SfFvFt(inputs),

      fub : calculations.fub(inputs),

   
      
    }
  }, // NE PAS OUBLIER LA VIRGULE
  
  // CALCULATION FUNCTIONS
  
  alphaV: (inputs) => {
    const {
      BoltClass,

    } = inputs;

    if (BoltClass == 1 || BoltClass == 3 || BoltClass == 6 ) {
      return 0.6;

    }
    
    if (BoltClass == 2 || BoltClass == 4  || BoltClass == 5 || BoltClass == 7  ) {
      return 0.5;

    }
  }, // NE PAS OUBLIER LA VIRGULE

  kOne: (inputs) => {
    const {
     LocationType,
     eTwo,
     pTwo,
     // D, 

    } = inputs;

    
    // LocationType == 1 for Edge Bolts
    // LocationType == 2 for Inner Bolts
    const D = calculations.D(inputs);
    
    if (LocationType == 1 ) {
      return (Math.min(2.8*eTwo/D-1.7,1.4*pTwo/D-1.7,2.5));
    }

    if (LocationType == 2 ) {
      return (Math.min(1.4*pTwo/D-1.7,2.5));
    }

  }, // NE PAS OUBLIER LA VIRGULE

  kTwo: (inputs) => {

    return 0.9;
  }, // NE PAS OUBLIER LA VIRGULE

  alphaD: (inputs) => {
    const {
     LocationType,
     eOne,
     pOne,
     
    } = inputs;

    const D = calculations.D(inputs);

    if (LocationType == 1 ) {
      return (eOne/(3*D));

    }

    if (LocationType == 2 ) {
      return (pOne/(3*D)-1/4);
    }

  }, // NE PAS OUBLIER LA VIRGULE

  alphaB: (inputs) => {
    const {
     fu,

    } = inputs;

    const alphaD = calculations.alphaD(inputs);
    const fub = calculations.fub(inputs);

    return  (Math.min(alphaD,fub/fu,1));
  
  }, // NE PAS OUBLIER LA VIRGULE


  D: (inputs) => {
    const {
     d
    } = inputs;

    return  Data[d]["D"];
  
  }, // NE PAS OUBLIER LA VIRGULE
  
  dM: (inputs) => {
    const {
     d
    } = inputs;

    return  1.07735*Data[d]["s"];
  
  }, // NE PAS OUBLIER LA VIRGULE


  As: (inputs) => {
    const {
     d
    } = inputs;

    return  Data[d]["As"];
  
  }, // NE PAS OUBLIER LA VIRGULE

  FvRd: (inputs) => {
    const {
      GammaTwo,
    } = inputs;

    const As = calculations.As(inputs); 
    const alphaV = calculations.alphaV(inputs); 
    const fub = calculations.fub(inputs);

    return (alphaV*fub*As/GammaTwo/1000);
  }, // NE PAS OUBLIER LA VIRGULE

  
  FtRd: (inputs) => {
    const {
      kTwo,
      GammaTwo,
    } = inputs;

    const As = calculations.As(inputs); 
    const fub = calculations.fub(inputs);

    return kTwo*fub*As/GammaTwo/1000;
  }, // NE PAS OUBLIER LA VIRGULE

  
  FbRd: (inputs) => {
    const {
      fu,
      d,
      tp,
      GammaTwo,
      
    } = inputs;

    const kOne = calculations.kOne(inputs);
    const alphaB = calculations.alphaB(inputs);

    return (kOne*alphaB*fu*d*tp/GammaTwo/1000);
  }, // NE PAS OUBLIER LA VIRGULE

  BpRd: (inputs) => {
    const {
      
      tp,
      fu,
      GammaTwo,
    } = inputs;
    
    const dM = calculations.dM(inputs);

    return (0.6*Math.PI*dM*tp*fu/GammaTwo/1000);
  }, // NE PAS OUBLIER LA VIRGULE
  
  SfFv: (inputs) => {
    const {
      FvEd,
    } = inputs;

    const FvRd = calculations.FvRd(inputs);

    return (FvEd/FvRd);
  }, // NE PAS OUBLIER LA VIRGULE

  
  SfFb: (inputs) => {
    const {
      FvEd,
    } = inputs;

    const FbRd = calculations.FbRd(inputs);
    return (FvEd/FbRd);
  }, // NE PAS OUBLIER LA VIRGULE

  
  SfFt: (inputs) => {
    const {
      FtEd,
    } = inputs;
    
    const FtRd = calculations.FtRd(inputs);

    return (FtEd/FtRd);
  }, // NE PAS OUBLIER LA VIRGULE
    
  SfBp: (inputs) => {
    const {
      FtEd,
    } = inputs;

    const BpRd = calculations.BpRd(inputs);
    return (FtEd/BpRd);
  }, // NE PAS OUBLIER LA VIRGULE
  
  SfFvFt: (inputs) => {
    const {
      FtEd,
      FvEd,
    } = inputs;

    const FtRd = calculations.FtRd(inputs);
    const FvRd = calculations.FvRd(inputs);

    return (FvEd/FvRd + FtEd/(1.4*FtRd));
  }, // NE PAS OUBLIER LA VIRGULE

  
  fub: (inputs) => {
    const {
      BoltClass
    } = inputs;

    if (BoltClass == 1 || BoltClass == 2  ) {
      return (400);

    }

    if (BoltClass == 3 || BoltClass == 4 ) {
      return (500);
    }

    if (BoltClass == 5) {
      return (600);
    }
    
    if (BoltClass == 6) {
      return (800);
    }
    
    
    if (BoltClass == 7) {
      return (1000);
    }
  }, // NE PAS OUBLIER LA VIRGULE

}



export default calculations;
