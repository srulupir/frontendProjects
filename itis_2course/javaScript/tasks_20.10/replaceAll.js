//task 5
function replaceAll(find, replace, str){
    return str.replace(new RegExp(find, 'g'), replace)
}
console.log(replaceAll('er', '111', 'qwerty'))