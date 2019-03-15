import { Age } from './../src/stellar.js';

describe('Age', function() {

  it('should take in a date string and return the number of years since then, to a precision of 5 significant digits', function() {
    const age = new Age("1996-11-26");
    expect(age.earth).toEqual(22.299);
  });

});
