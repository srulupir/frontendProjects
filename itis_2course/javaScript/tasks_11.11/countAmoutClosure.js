//task1
function countAmount(){
  let count = 0;
  return function(){
    count ++;
    return count;
  }
}
let counter1 = countAmount();
let counter2 = countAmount();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());