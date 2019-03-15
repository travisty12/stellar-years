import { Age } from './../src/stellar.js';

describe('Age', function() {

  it('should take in a date string and return the number of years since then, to a precision of 5 significant digits', function() {
    const age = new Age("1996-11-26");
    expect(age.earth).toEqual(22.300);
  });

  it('should convert Earth years to Mercury years', function() {
    const age = new Age("1996-11-26");
    expect(age.toMercury()).toEqual(92.531);
  });

  it('should convert Earth years to Venus years', function() {
    const age = new Age("1996-11-26");
    expect(age.toVenus()).toEqual(36.260);
  });

  it('should convert Earth years to Mars years', function() {
    const age = new Age("1996-11-26");
    expect(age.toMars()).toEqual(11.855);
  });

  it('should convert Earth years to Jupiter years', function() {
    const age = new Age("1996-11-26");
    expect(age.toJupiter()).toEqual(1.8803);
  });

  it('should alert the user to approximately how much longer they have to live on Earth', function() {
    const age = new Age("1996-11-26");
    expect(age.toEarthDeath()).toEqual(57.700);
  });

  it('should alert the user to approximately how much longer they have to live on Mercury', function() {
    const age = new Age("1996-11-26");
    expect(age.toMercuryDeath()).toEqual(239.42);
  });

  it('should alert the user to approximately how much longer they have to live on Venus', function() {
    const age = new Age("1996-11-26");
    expect(age.toVenusDeath()).toEqual(93.821);
  });

  it('should alert the user to approximately how much longer they have to live on Mars', function() {
    const age = new Age("1996-11-26");
    expect(age.toMarsDeath()).toEqual(30.675);
  });

  it('should alert the user to approximately how much longer they have to live on Jupiter', function() {
    const age = new Age("1996-11-26");
    expect(age.toJupiterDeath()).toEqual(4.8651);
  });

  it('should congratulate the user on living past the expected lifespan', function() {
    const age = new Age("1938-11-26");
    expect(age.toEarthDeath()).toEqual('0.3 past the expected lifespan!');
  });

  it('should output the users next birthday on each planet', function() {
    const age = new Age("1996-11-26");
    expect(age.nextEarthBirthday()).toEqual('Tue Nov 26 2019');
    expect(age.nextMercuryBirthday()).toEqual('Thu Apr 25 2019');
    expect(age.nextVenusBirthday()).toEqual('Wed Aug 28 2019');
    expect(age.nextMarsBirthday()).toEqual('Sat Jun 22 2019');
    expect(age.nextJupiterBirthday()).toEqual('Sat Aug 15 2020');
  });

});
