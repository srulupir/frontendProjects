//task 3
const str1 = "Qwerr?ewq"
const str2 = "qwer"

function isPalindrom(str){
  const removeSimbols = str.replace(/[^A-Z0-9]/ig, "").toLowerCase()
  const strReversed = removeSimbols.split('').reverse().join('')
  return (removeSimbols === strReversed);
    
}
console.log(isPalindrom(str1))
console.log(isPalindrom(str2))