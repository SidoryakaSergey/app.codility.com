const A = [1, 3, 1, 4, 2, 3, 5, 4];
const X = 5;

function solution(X, A){
    let masX = [];

    if ((A.length == 1) && (X == A[0]) && (X == 1)) {
        return 0;
    }

    for (let i = 0; i< X; i++){
        masX[i] = i+1;
    }

    for (let j = 0; j < A.length; j++){
        if (masX.includes(A[j])){
            masX.splice(masX.indexOf(A[j]),1);
        }else continue;
        if (masX.length == 0){
            return j;
        }
    }
    return -1;
}

console.log(solution(X, A));