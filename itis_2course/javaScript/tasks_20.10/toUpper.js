//task1
var str = "my name is tanya"
function toUpper(str) {

 return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})

}
console.log(toUpper(str))