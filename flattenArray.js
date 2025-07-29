let a = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]];

function flatten(value) {
    let result = []

    if (!Array.isArray(value)) {
        result.push(value)
    }
    else {
        for (let i = 0; i < value.length; i++) {
            result = result.concat( flatten(value[i])); // Recursively call flatten
        }
    }
    return result
}


console.log(...flatten(a))