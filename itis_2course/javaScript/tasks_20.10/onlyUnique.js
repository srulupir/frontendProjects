//task 4
const str1 = 'Chuvash Repablic is cool'
function onlyUnique(str){
    curStr = str.split('')
    let unique = [...new Set(str)]
    return unique
}
console.log(onlyUnique(str1).join(''))