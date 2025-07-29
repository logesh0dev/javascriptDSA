var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function efficientKadanes(value) {
  let sum = 0;
  let max = value[0];
  let start = 0;
  let end = 0;
  let temp = 0;
  for (let i = 0; i < value.length; i++) {
    sum = sum + value[i];
    if (sum > max) {
      max = sum;
      start = temp;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
      temp = i + 1;
    }
  }
  return {
    maxSum: max,
    subarray: value.slice(start,end+1),
  };
}


function kadanes(value) {
  let max = value[0];
  let start = 0;
  let end = 0;
  for (let i = 0; i < value.length; i++) {
    let current = 0;
    for (let j = i; j < value.length; j++) {
      current = current + value[j];
      if (current > max) {
        max = current;
        start = i;
        end = j;
      }
    }
  }
  return {
    maximum:max,
    arrayvalue:value.slice(start, end + 1) }
}



console.log("result", kadanes(a));
console.log("result", efficientKadanes(a));
