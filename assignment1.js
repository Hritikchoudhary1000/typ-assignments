var user_name = "Hritik Choudhary";
var str1 = "My name";
var str2 = "is";
var str3 = "Hritik Choudhary";
var company_name ="The youth project";

var company_info = function(name){//anonymous function
    console.log("anonymous function Example 1")
    console.log("Company name-"+name)
};

(function assignment1(name,company_name,str1,str2,str3){
    console.log("IIFE function");
    console.log("My Name is "+name);
    company_info(company_name);
    console.log(multiply(1,2,3,4,5));
    console.log(merge_string(str1,str2,str3));
    

})(user_name,company_name,str1,str2,str3); //iife




function multiply(){
    var ans=1
    for(let i=0;i<arguments.length;i++){
        ans*=arguments[i];
    }
    return ans; //pure function
}
function square(x){
    var sq_value=x*x;
    return sq_value;

}
var op1 = 3;
var op2 = 4;
var op3 = 5;
console.log("Mulitply function(pure function):-",multiply(op1,op2,op3));
console.log("Mulitply function(pure function):-",multiply(2,3,4,5,6));
console.log("Square function(pure function)-",square(op3));





function merge_string(){
    var merged_str=""
    for(let i=0;i<arguments.length;i++){
        merged_str+=" "+arguments[i];
    }
    return merged_str;
}
var str1 = "This is";
var str2= "just a start";
console.log(merge_string(str1,str2));


