/*Syntax for function declaration & definition:
function functionName(parameter1, parameter2, ..., parameterN) {
  // body code
  // return value, if required
}
*/


//Hello program

function greetings(employeeName){
    console.log("Hello "+employeeName);
}

greetings("Krishna");
greetings("Aditya");


//Percentage calculation program

function calculatePercentage(studentName,maths,physics,chemistry){
    var actualTotalOfAll = 300;
    var sumOfAllSubjects = maths + physics + chemistry;
    var percentage = (sumOfAllSubjects/actualTotalOfAll)*100;

    console.log("The percentage of student "+ studentName +" is "+percentage);
}

calculatePercentage("Krishna", 90, 79, 98);
calculatePercentage("Aditya", 99, 98, 90);

//Assignment - Write JS code to print the multiplication table from 1 to 10 


