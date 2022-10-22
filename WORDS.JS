const str = "QLGNAEKIRLRNGEAE";
const word = "KING";
let pathArray= [];
let index = 0;

let array=[];
let k = 0;
const SQR = Math.sqrt(str.length);
for (let i = 0; i < SQR; i++) {
    array[i]=[];
    for (let j = 0; j < SQR; j++) {
        array[i][j]=str[k];
        k++;
    }
}
console.log(array);

function findFirstChar(C, begin){
    console.log('Find');
    let done= {
        x:0,
        y:0
    };
    for (let i = 0; i < SQR; i++){
        if (~array[i].indexOf(C, begin)){
            done.y = i;
            done.x = array[i].indexOf(C, begin);
            break;
        }
    }
    return done;
}

function findCharNext(C, N){
    let done = {
        x: 0,
        y: 0
    };
    console.log(pathArray[N]);
    done.x = pathArray[N].x;
    done.y = pathArray[N].y;
    
    if (C == array[pathArray[N].x + 1][pathArray[N].y]){
        done.x++;
        return done;
    }
    if (C == array[pathArray[N].x - 1][pathArray[N].y]) {
        done.x--;
        return done;
    }
    if (C == array[pathArray[N].x][pathArray[N].y + 1]) {
        done.y++;
        return done;
    }
    if (C == array[pathArray[N].x][pathArray[N].y - 1]) {
        done.y--;
        return done;
    }
    
}


pathArray[0] =  findFirstChar(word[0],index);
for (h = 1; h < word.length; h++){
    pathArray[h] = findCharNext(word[h],h-1);
}

console.log(pathArray);