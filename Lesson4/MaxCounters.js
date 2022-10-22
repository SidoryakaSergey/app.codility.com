const A = [3, 4, 4, 6, 1, 4, 4];
const N = 5;

function solution(N, A) {
    let counter = [];
    let Max = 0;
    for (let i = 0; i < N; i++){
        counter[i] = 0;
    }
    
    for (let i = 0; i < A.length; i++){
        if (A[i] <= N ){
            counter[A[i]-1] += 1;
            if (Max < counter[A[i]-1]) Max = counter[A[i]-1];
        }else{
            for (let k = 0; k < N; k++) {
                counter[k] = Max;
            }
        }
    }
    return counter;
}

// END

console.log(solution(N, A));