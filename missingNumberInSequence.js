let a=[1,2,3,6,8,11,13,20];

for(let i=0;i<a.length;i++){
    if((a[i] !== a[i+1]-1) && a[i+1]){
        console.log(Math.floor((a[i]+a[i+1])/2))
        a.splice(i+1,0,a[i]+1)
        
    }
}

console.log("asdfasdf",a)