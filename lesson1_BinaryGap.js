const N = 1041;

function solution2(N) {
  let S = '';
  let first1 = 0;
  let second1 = 0;
  let interval = 0;
  let maxInterval = 0;
  S = N.toString(2);
  first1 = S.indexOf('1', 0);
  if (first1 == -1) {
    return 0;
  }
  do {
    second1 = S.indexOf('1', first1 + 1);
    interval = second1 - first1 - 1;
    if (maxInterval < interval) {
      maxInterval = interval;
    }
    first1 = second1;
  } while (~S.indexOf('1', first1 + 1));

  if (second1 == -1) {
    return 0;
  } else {
    return maxInterval;
  }
}

console.log('Max Interval =', f(N));
