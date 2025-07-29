let a="AAA";
let final=0
for(let i=0;i<a.length;i++){
    final = (final * 26) + a.charCodeAt(i)-64
}

console.log("final",final)