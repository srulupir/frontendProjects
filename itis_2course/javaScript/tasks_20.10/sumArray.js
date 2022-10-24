//task 7
function sum(arr = []){
    var counter = 0
    for(var i = 0; i < arr.length; i++){
        counter += arr[i]
    }
    console.log(counter)
}
const arr1 = [1,2,3]
sum(arr1)