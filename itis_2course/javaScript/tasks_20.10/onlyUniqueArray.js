//task6
function onlyUnique(arr = []){
    const set1 = [...new Set(arr)]
    return set1
}
arr1 = [1, 2, 1, 1, 3]
console.log(onlyUnique(arr1))