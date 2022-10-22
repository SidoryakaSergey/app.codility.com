const A = [-1, -3];

function solution(A) {
 
A.sort();
let max = 1;
if (A[A.length-1] == 1) return 2;

if (~(positive = A.indexOf(1))) {
    for (let i = positive; i < A.length; i++){
        console.log(`A[i]=${A[i]}     A[i]+1=${A[i]+1}`);
        if (i == A.length-1) {
            if (max < A[i]) max = A[i];
        } else {
            if (max < A[i]) max = A[i];
            if ((A[i] + 1 != A[i + 1]) && (A[i] != A[i + 1])){
                max = A[i] + 1;
                break;
            } 
        }
        
    }
  }else {
    for (let i = 0; i < A.length; i++) {
        console.log(`A[i]=${A[i]}     A[i]+1=${A[i]+1}`);
        if (i == A.length - 1) {
            if (max < A[i]) max = A[i];
        } else {
            if (max < A[i]) max = A[i];
            if ((A[i] + 1 != A[i + 1]) && (A[i] != A[i + 1])) {
                max = A[i] + 1;
                break;
            }
        }
    }
}

if (max <= 0) return 1;
console.log(`max = ${max}   A[i] = ${A[A.length-1]}`);
if (max == A[A.length - 1]) return max + 1;
return max;



}

console.log(solution(A));