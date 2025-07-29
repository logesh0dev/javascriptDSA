function maxSubString(value){
let charSet = new Set()
let left=0
let max=0
for(let r=0;r<value.length;r++){

    while(charSet.has(value[r])){
        charSet.delete(value[left])
        left += 1;
    }
    charSet.add(value[r])
    max=Math.max(max, r-left+1)
}
return max
}
var a='abcdefghabcdefghi'
console.log(maxSubString(a))