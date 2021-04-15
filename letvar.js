//Difference between var and let keyword
let firstName = "Krishna"; // Global scope

if(true){
    //let lastName = "vetthi";  //local or block scope
    var lastName = "vetthi";
    console.log(firstName);
    console.log(lastName);
}

console.log(firstName);
console.log(lastName);
