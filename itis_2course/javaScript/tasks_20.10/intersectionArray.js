//task8
function doIntersection(arr1 = [], arr2 = []){
    let intersection = arr1.filter(x => arr2.includes(x))
    return intersection
}
arrA = [1, 2, 3, 4]
arrB = [3, 4, 5, 6]
console.log(doIntersection(arrA, arrB))