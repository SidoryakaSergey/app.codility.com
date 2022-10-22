const A = [3, 2];

function solution(A) {
    A.sort();
    if (A[0] != 1) return 0;
    if ((A.length == 1) && (A[0] == 1)) return 1;
    if ((A.length == 1) && (A[0] != 1)) return 0;
    if ((A.length == 2) && (A[0] == A[1] - 1)) return 1;
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] != A[i + 1] - 1) return 0;
    }
    return 1;
}

console.log(solution(A));