let a = { a: 1, b: { c: 2 },d:[1,2,3,4] };


function deepClone(value){
    if(typeof value  == null || typeof value !== "object"){
        return value
    }

    if(Array.isArray(value)){
        return value.map(deepClone)
    }

    let obj={};

    for(let i in value){
        // if(obj[i]){
        obj[i] = deepClone(value[i])

        // }
    }

    return obj
}

console.log("asdfdsf",deepClone(a))