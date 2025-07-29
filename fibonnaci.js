let a=[0,1]
let l=10
for(let i=1;i<=l-2;i++){
    a.push(a[i] + a[i-1])
}

function fib(n){
    if(n <=1){
        return n
    }
    else{
        return fib(n-1) + fib(n-2)
    }
}

console.log(a,fib(l))