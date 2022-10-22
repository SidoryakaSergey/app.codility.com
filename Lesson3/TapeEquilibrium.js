const A = [3, 1, 1];

function solution(A) {
    let min = Infinity;
    let sum1 = A[0];
    let sum2 = 0;
    if (A.length == 2) return Math.abs(A[0] - A[1]);

    for (let p = 1; p < A.length; p++) {
        sum2 = sum2 + A[p];
    }
    if (min > Math.abs(sum1 - sum2)) min = Math.abs(sum1 - sum2);

    for (let j = 1; j < A.length-1; j++) {
        sum1 = sum1 + A[j];
        sum2 = sum2 - A[j];
        if (min > Math.abs(sum1 - sum2)) min = Math.abs(sum1 - sum2);
    }
    return min;
}

console.log(solution(A));