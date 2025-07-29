function anagram(value){
let obj={}
for(let i=0;i<value.length;i++){
let char = value[i].split('').sort().join('')
if(obj[char]){
obj[char].push(value[i])
}
else{
    obj[char] = [value[i]]
}
}
console.log(Object.values(obj),)
return obj
}

var a=["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(anagram(a))