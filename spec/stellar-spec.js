import { Age } from './../src/stellar.js';

describe('Age', function() {

  it('should take in a date string and return the number of years since then, to a precision of 5 significant digits', function() {
    const age = new Age("1996-11-26");
    expect(age.earth).toEqual(22.299);
  });

  it('should convert Earth years to Mercury years', function() {
    const age = new Age("1996-11-26");
    expect(age.toMercury()).toEqual(92.912);
  });

  it('should convert Earth years to Venus years', function() {
    const age = new Age("1996-11-26");
    expect(age.toVenus()).toEqual(35.966);
  });

  it('should convert Earth years to Mars years', function() {
    const age = new Age("1996-11-26");
    expect(age.toMars()).toEqual(11.861);
  });

  it('should convert Earth years to Jupiter years', function() {
    const age = new Age("1996-11-26");
    expect(age.toJupiter()).toEqual(1.8802);
  });

  it('should alert the user to approximately how much longer they have to live on Earth', function() {
    const age = new Age("1996-11-26");
    expect(age.toEarthDeath()).toEqual(57.701);
  });

  it('should alert the user to approximately how much longer they have to live on Mercury', function() {
    const age = new Age("1996-11-26");
    expect(age.toMercuryDeath()).toEqual(240.42);
  });

  it('should alert the user to approximately how much longer they have to live on Venus', function() {
    const age = new Age("1996-11-26");
    expect(age.toVenusDeath()).toEqual(93.066);
  });

  it('should alert the user to approximately how much longer they have to live on Mars', function() {
    const age = new Age("1996-11-26");
    expect(age.toMarsDeath()).toEqual(30.692);
  });

  // it('should alert the user to approximately how much longer they have to live on Jupiter', function() {
  //   const age = new Age("1996-11-26");
  //   expect(age.toJupiterDeath()).toEqual(57.701);
  // });

  it('should congratulate the user on living past the expected lifespan', function() {
    const age = new Age("1938-11-26");
    expect(age.toEarthDeath()).toEqual('0.3 past the expected lifespan!');
  });

});
