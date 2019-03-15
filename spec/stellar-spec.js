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

});
