let nums = [2,7,11,15,-2];
let target = 9
let c = new Set();
let d=[]

for(let i=0;i<nums.length;i++){
    let t= target - nums[i]
    if(c.has(t)){
        console.log(nums[i],t)
        d.push([nums[i],t])
    }
    c.add(nums[i])
}

console.log(...d)