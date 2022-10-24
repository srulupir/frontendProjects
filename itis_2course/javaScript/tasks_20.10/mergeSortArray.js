//task 10
function merge(arr1 = [], arr2 = []) {
    let mergedArr = []
    let index1 = 0
    let index2 = 0
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            mergedArr.push(arr1[index1])
            index1++;
        } else {
            mergedArr.push(arr2[index2])
            index2++
        }
    }
    while (index1 < arr1.length) {
        mergedArr.push(arr1[index1])
        index1++
    }
    while (index2 < arr2.length) {
        mergedArr.push(arr2[index2])
        index2++
    }
    return mergedArr
}

function mergeSort(arr) {
    if (arr.length < 2) {
    return arr}
    let mid = Math.floor(arr.length / 2)
    let firstHalf = arr.slice(0, mid)
    let secondHalf = arr.slice(mid)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
let array = [8, 2, 4, 1, 9, 3]
console.log(mergeSort(array))
