// A non - empty array A consisting of N integers is given.The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except
// for one element that is left unpaired.

// For example, in array A such that:

// A[0] = 9 A[1] = 3 A[2] = 9
// A[3] = 3 A[4] = 9 A[5] = 7
// A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.
// Write a
// function:

// function solution(A);

// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

// For example, given array A such that:

// A[0] = 9 A[1] = 3 A[2] = 9
// A[3] = 3 A[4] = 9 A[5] = 7
// A[6] = 9
// the
// function should
// return 7, as explained in the example above.

// Write an efficient algorithm
// for the following assumptions:

//     N is an odd integer within the range[1. .1, 000, 000];
// each element of array A is an integer within the range[1. .1, 000, 000, 000];
// all but one of the values in A occur an even number of times.

const A = [
  9, 9, 3, 5, 3, 7, 7, 10, 10, 11, 11, 12, 12, 13, 14, 13, 14, 15, 15, 16, 16,
  18, 18, 19, 20, 21, 20, 21,
];

function codility() {
  const len = A.length;
  if (len === 0) {
    return 1;
  }
  if (len === 1) {
    if (A[0] === 1) {
      return 2;
    } else {
      return A[0] - 1;
    }
  }
  A.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < len - 1; i++) {
    if (A[i] + 1 != A[i + 1]) {
      return A[i] + 1;
    }
  }
  if (A[0] === 1) {
    return A[len - 1] + 1;
  } else {
    return A[0] - 1;
  }
}

console.log(codility());

// END
