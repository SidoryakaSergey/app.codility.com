const A = [3, 8, 9, 7, 6];
const K = 3;

function solution2(A, K) {
  for (let j = 0; j < K; j++) {
    A.unshift(A[A.length - 1]);
    A.pop();
  }
  return A;
}

console.log(solution2(A, K));
