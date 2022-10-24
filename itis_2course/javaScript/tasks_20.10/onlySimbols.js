//task2
const str = "i/do**@like+ca^ts"
function deleteSimbols(str){
    return str.replace(/[^a-zA-Z ]/g, "")
}
console.log(deleteSimbols(str))
