// Are they the "same?" from http://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

/*Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples

Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays

If we change the first number to something else, comp may not return true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks

a or b might be [] (all languages except R, Shell). a or b might be nil or null or None (except in Haskell, Elixir, C++, Rust, R, Shell).

If a or b are nil (or null or None), the problem doesn't make sense so return false.

If a or b are empty the result is evident by itself.

Note for C

The two arrays have the same size (> 0) given as parameter in function comp.*/

const comp = (array1, array2) => {

};

const {expect} = require('chai');

describe('comp function', () => {
  const testInputs = [
    [[ 121, 144, 19, 161, 19, 144, 19, 11 ], [ 121, 14641, 20736, 361, 25921, 361, 20736, 361 ], true],
    [[ 121, 144, 19, 161, 19, 144, 19, 11 ], [ 231, 14641, 20736, 361, 25921, 361, 20736, 361 ], false],
    [[ 121, 144, 19, 161, 19, 144, 19, 11 ], [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ], false],
    [[], [], true],
    [[], null, false],
    [[ 121, 144, 19, 161, 19, 144, 19, 11, 1008 ], [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ], false],
    [[ 10000000, 100000000 ], [ 100000000000000, 10000000000000000 ], true],
    [[ 10000001, 100000000 ], [ 100000000000000, 10000000000000000 ], false],
    [[ 2, 2, 3 ], [ 4, 9, 9 ], false]
  ];
  testInputs.forEach(input => {
    it(`should return ${input[3]} given ${input[0]} & ${input[1]}`, () => {
      expect(comp(input[0], input[1])).to.equal(input[2]);
    });
  });
});