function EfficientProductExceptSelf(value) {
  let array = Array(value.length).fill(1);
  
  let left = 1;
  for(let i=0;i<array.length;i++){
    array[i]=array[i]*left
    left=left*value[i]
  }

  let right=1
  for(let i=array.length-1;i>=0;i--){
    array[i]*=right
    right*=value[i]
  }

  return array;
}

function productExceptSelf(value) {
  let array = [];
  for (let i = 0; i < value.length; i++) {
    let temp = 1;
    for (let j = 0; j < value.length; j++) {
      if (i != j) {
        temp = temp * value[j];
      }
    }
    array.push(temp);
  }
  return array;
}

var a = [1, 2, 3, 4];
console.log(productExceptSelf(a));
console.log(EfficientProductExceptSelf(a));
