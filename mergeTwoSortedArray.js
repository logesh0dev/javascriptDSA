let a=[2,4,5,6] 
let b=[2,3,4,5]

let c = [...a,...b]
let d=[]

c.sort((a,b) =>a-b)
c.forEach(x => d.includes(x)? "":d.push(x))
console.log([...new Set(c)],d)

for(let i=0;i<c.length;i++){
for(let j=i+1;j<c.length;j++){
    if(c[i] >c[j]){
        let temp=c[i];
        c[i]=c[j];
        c[j]=temp;
    }
}
}
console.log("c",c)