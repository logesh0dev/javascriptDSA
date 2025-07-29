let a="Brilk"
let b = "Block"
let c = ""

let charCount={}
for(let c of a){
charCount[c] = (charCount[c] || 0) + 1
}
console.log(charCount)
let result = []
a.split("").forEach((x,i) => {
    if(x == b[i]){
        result[i]="g"
        charCount[x]--
    }
    else {
        result[i]="-"
    }
})
console.log("result",result)
a.split("").forEach((x,i) => {
    if(charCount[b[i]] > 0 && result[i] == "-"){
        result[i] = "y"
        charCount[b[i]]--
    }

})
console.log("result",result.join(""))
