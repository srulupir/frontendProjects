//task2
function sumNums(a){
  return function(b){
    return function(c){
      return a + b + c;
    }
  }
}
console.log(sumNums(100)(2)(3));