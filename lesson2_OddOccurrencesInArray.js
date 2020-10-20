const A = [9, 9, 3, 5, 3, 7, 7];

function solution(A) {
  let N = 0;
  let len = A.length - 1;
  if (!len) {
    return A[0];
  }
  for (let i = len; i >= 0; i--) {
    if (A[i] === null) {
      //   A.pop();
      i--;
    }
    let temp = A[i];
    // A.pop();
    A[i] = null;
    let Index = A.indexOf(temp);
    if (Index > -1) {
      A[Index] = null;
    } else {
      return temp;
    }
  }
}

console.log(solution(A));
