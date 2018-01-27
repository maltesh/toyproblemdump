// Find common elements in three sorted arrays from https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/

/*
Given three arrays sorted in non-decreasing order, print all common elements in these arrays.

Examples:

ar1[] = {1, 5, 10, 20, 40, 80}
ar2[] = {6, 7, 20, 80, 100}
ar3[] = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20, 80

ar1[] = {1, 5, 5}
ar2[] = {3, 4, 5, 5, 10}
ar3[] = {5, 5, 10, 20}
Output: 5, 5
*/

const findCommon = (a1, a2, a3) => {

};

const {expect} = require('chai');

describe('findCommon function', () => {
  it('should return [5, 5]', () => {
    const a1 = [1, 5, 5];
    const a2 = [3, 4, 5, 5, 10];
    const a3 = [5, 5, 10, 20];
    expect(findCommon(a1, a2, a3)).to.eql([5, 5]);
  });
  it('should return [20, 80]', () => {
    const a1 = [1, 5, 10, 20, 40, 80];
    const a2 = [6, 7, 20, 80, 100];
    const a3 = [3, 4, 15, 20, 30, 70, 80, 120];
    expect(findCommon(a1, a2, a3)).to.eql([20, 80])
  });
});
