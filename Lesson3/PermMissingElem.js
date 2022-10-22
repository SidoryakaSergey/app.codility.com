const A = [1,2];

function solution(A){
    A.sort();
    if (A.length == 0) return 1;
    if ((A.length == 1) && (A[0] != 2)) {
        return A[0] + 1;
    }
    if ((A.length == 1) && (A[0] == 2)) {
        return 1;
    }
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] != A[i + 1] - 1) {
            return A[i] + 1;
        }
    }
    if (A[0] == 1) {
        return A[A.length - 1] + 1;
    } else {
        return A[0] - 1;
    }
}

// END

console.log( solution (A));