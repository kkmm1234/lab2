function string_lenght(value:string):number{
    return value.length
}
console.log("the lenght of string is: "+string_lenght("test 1"));

function string_length_nospaces(value:string):number{
    return value.replace(" ","").length
}
console.log("The length of string is: "+string_length_nospaces("test 1"));

function both_methods(value:string, spaces:boolean):number{
    if(spaces){
        value.length
    }
    else{
        return value.replace(" ","").length;
    }
}
console.log("The length of string is:" +both_methods("test 1", true));