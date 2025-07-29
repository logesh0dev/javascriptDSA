let a=[0,1,0,3,12]
// console.log(a.splice())

for(let i=0;i<a.length;i++){
    if(a[i] == 0){
        a.splice(a.length,0,a[i])
        a.splice(i,1)
        i--
    }
}

console.log("a",a)