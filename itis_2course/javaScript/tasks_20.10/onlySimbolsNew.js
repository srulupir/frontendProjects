//task2
const str = "апЧыхбА/does**@like+ca^ts"
function deleteSimbols(str){
    return str.replace(/[!-/ :-@ \-' {-~ _ ^ [\] ` ]/g, "")
}
console.log(deleteSimbols(str))