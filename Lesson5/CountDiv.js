const A = 6,
    B = 11,
    K = 2;

function solution(A, B, K) {
    let ofset = 0;

    if (A == B){
        if ( A % K){
            return 0;
        } else{
            return 1;
        }
    }

    if (A == 0) ofset = 1
       
    if (!(B % K)) ofset = 1;
    
    if (!(A % K)) ofset = 1;

    if ( A < K) ofset = 1;

    return Math.trunc((B - A) / K) + ofset;
    
}

console.log(solution(A, B, K));