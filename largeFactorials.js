// Large Factorials from https://www.codewars.com/kata/large-factorials/train/javascript

/*In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None. In C++, return an empty string. For positive numbers a full length number is expected for example, return 25! = '15511210043330985984000000' as a String!

Note: 0! is always equal to 1. Negative values should return null or an empty string(in C++).

For more on Factorials : http://en.wikipedia.org/wiki/Factorial*/

const factorial = n => {
  return '1';
};

const {expect} = require('chai');

describe('factorial function', () => {
  it('should return a string', () => expect(factorial(3)).to.be.a.string);
  it('should return 1 given 0', () => expect(factorial(0)).to.equal('1'));
  it('should return 2 given 2', () => expect(factorial(2)).to.equal('2'));
  it('should return 120 given 5', () => expect(factorial(5)).to.equal('120'));
  it('should return 720 given 6', () => expect(factorial(6)).to.equal('720'));
  it('should return 5040 given 7', () => expect(factorial(7)).to.equal('5040'));
  it('should return 362880 given 9', () => expect(factorial(9)).to.equal('362880'));
  it('should return 1307674368000 given 15', () => expect(factorial(15)).to.equal('1307674368000'));
  it('should return 12296942187394494341101789284917501765723005994271693066207625211678145401177289658609880984670515317835995074429904709708273401807824365415928975695099566042246320538220924308010459938381430588227927174194100982189204709615293198326390773410925903872000000000000000000000000000000000000000 given 162', () => {
    expect(factorial(162)).to.equal('12296942187394494341101789284917501765723005994271693066207625211678145401177289658609880984670515317835995074429904709708273401807824365415928975695099566042246320538220924308010459938381430588227927174194100982189204709615293198326390773410925903872000000000000000000000000000000000000000');
  });
  it('should return 1124449491085736328304109938642204255210926338928074644824004638489082006275333290972493383366025810760784721148670387931016867466241864043097971934380608571667663656813479380532220559625623957805983663469624056384461365161184611811666936997356618263665919666081369067104501760000000000000000000000000000000000000000000 given 175', () => {
    expect(factorial(175)).to.equal('1124449491085736328304109938642204255210926338928074644824004638489082006275333290972493383366025810760784721148670387931016867466241864043097971934380608571667663656813479380532220559625623957805983663469624056384461365161184611811666936997356618263665919666081369067104501760000000000000000000000000000000000000000000');
  });
});
