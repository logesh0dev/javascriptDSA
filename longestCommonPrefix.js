function prefix(value) {
  if (value.length <= 0) {
    return "";
  }
  let prefix = value[0];
  
  for (let i = 0; i < value.length; i++) {

    while(value[i].indexOf(prefix) != 0){
        console.log('prefix', prefix)
        prefix = prefix.slice(0,prefix.length-1)

    }

  }
  return prefix
}


console.log(prefix(['flowra', 'flower', 'floweran']))
