let a="a1b2c3"

function stringTransformation(value){
    let final=''


    for(let i=0;i<value.length;i++){
        if(/[a-zA-z]/.test(value[i]) && /\d/.test(value[i+1]) ){
            final = final + value[i].repeat(parseInt(value[i+1]))
        }
    }

    return final
}

console.log(stringTransformation(a))
