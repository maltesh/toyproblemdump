// IP Validation from https://www.codewars.com/kata/ip-validation/train/javascript

/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

Input to the function is guaranteed to be a single string.

Examples

// valid inputs:
1.2.3.4
123.45.67.89

// invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!*/

const isValidIp = address => {

};

const expect = require('chai').expect;

describe('isValidIp function', () => {

  context('a valid IP address should contain four octets--no more; no less', () => {
    it('should return true for 1.2.3.4', () => {
      expect(isValidIp('1.2.3.4')).to.be.true;
    });
    it('should return false for 1.2.3', () => {
      expect(isValidIp('1.2.3')).to.be.false;
    });
    it('should return false for 1.2.3.4.5', () => {
      expect(isValidIp('1.2.3.4.5')).to.be.false;
    });
  });

  context('a valid IP address should have no octet with a value greater than 255', () => {
    it('should return true for 123.45.67.89', () => {
      expect(isValidIp('123.45.67.89')).to.be.true;
    });
    it('should return false for 123.456.78.90', () => {
      expect(isValidIp('123.456.78.90')).to.be.false;
    });
  });

  context('an IP address with leading zeros is invalid', () => {
    it('should return false for 01.02.03.04', () => {
      expect(isValidIp('01.02.03.04')).to.be.false;
    });
    it('should return false for 123.045.067.089', () => {
      expect(isValidIp('123.045.067.089')).to.be.false;
    });
  });

});
