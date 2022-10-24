//task9
function binarySearch(arr = [], num){
    let start = 0
    let end = arr.length - 1
    let position = -1
    let flag = false
    while(start <= end && flag == false){
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == num){
            flag = true
            position = mid
        }else if (arr[mid] < num){
              start = mid + 1  
            }else {
                end = mid - 1
            }
    } 
    return position
}
const arr1 = [1, 2, 3, 4, 5]
console.log(binarySearch(arr1, 5))