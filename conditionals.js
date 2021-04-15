//Conditionals

/*
if statement:
Syntax:
if (condition) {
    code to be executed when the condition holds true
}
*/

var number = 98;
if(number % 10 == 0){
    console.log("The number is divisible by 10");
}

/*
if-else Statement:
Syntax:
if (condition) {
    // code to be executed when the condition holds true
} else {
    // code to be executed when the condition holds false
}
*/

var number = 98;
if(number % 10 == 0){
    console.log("The number is divisible by 10");
}else{
    console.log("The number is not divisible by 10");
}


/*
Ternary Operator
Syntax:

condition ? true-block : false-block
*/

var number = 980;

number % 10 == 0 ? console.log("The number is divisible by 10") : console.log("The number is not divisible by 10");


/*
Nested if..else
*/

//let us fnd the greatest number of 3 numbers

let number1 = 10, number2 = 15, number3 = 1;

if(number1>number2 && number1>number3){
    console.log("The greatest number of 3 numbers is "+number1);
}else{
    if(number2>number1 && number2>number3){
        console.log("The greatest number of 3 numbers is "+number2);
    }else{
        console.log("The greatest number of 3 numbers is "+number3);
    }
}

/* 
switch():
Syntax:
switch(variableToBeChecked) {
    case value1: 
        // code to be executed when variableToBeChecked matches value1
        break;   
    case value2: 
        // code to be executed when variableToBeChecked matches value2
        break;   
    case valueN: 
        // code to be executed when variableToBeChecked matches valueN
        break;   
    default:
        // code to be executed when variableToBeChecked doesn't match any case value
}
*/

//Code to find out the day from a week

let day = "Thursday";

switch(day){
    case "Sunday": console.log("Weekend"); break;
    case "Monday": console.log("Weekday"); break;
    case "Tuesday": console.log("Weekday"); break;
    case "Wednesday": console.log("Weekday"); break;
    case "Thursday": console.log("Weekday"); break;
    case "Friday": console.log("Weekday"); break;
    case "Saturday": console.log("Weekend"); break;
    default: console.log("Invalid data"); 
}
