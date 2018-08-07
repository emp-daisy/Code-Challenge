import 
  chai
from "chai";
import squareDigits from '../square-digits';

const expect = chai.expect;

describe('Square Digits', () => {
  it('it should return the correct value for square of 1', () => {
    expect(squareDigits(111)).to.equal(111);
  });

  it('it should return the correct value', () => {
    expect(squareDigits(456)).to.equal(162536);
  });

  it('it should no accept string', () => {
    expect(squareDigits('hello')).to.equal('Invalid value');
  });

  it('it should accept signed positive numbers', () => {
    expect(squareDigits(+345)).to.equal(+91625);
  });

  it('it should accept negative numbers', () => {
    expect(squareDigits(-234)).to.equal(-4916);
  });

  it('it should not accept decimals', () => {
    expect(squareDigits(12.12)).to.equal('Invalid value');
  });

  it('it should not accept undefined', () => {
    expect(squareDigits()).to.equal('Invalid value');
  });
});