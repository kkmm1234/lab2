function string_lenght(value) {
    return value.length;
}
console.log("the lenght of string is: " + string_lenght("test 1"));
function string_length_nospaces(value) {
    return value.replace(" ", "").length;
}
console.log("The length of string is: " + string_length_nospaces("test 1"));
function both_methods(value, spaces) {
    if (spaces) {
        value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
console.log("The length of string is:" + both_methods("test 1", true));
