//Loops in Javascript

//print my name for 5 times
console.log("Krishna vetthi");
console.log("Krishna vetthi");
console.log("Krishna vetthi");
console.log("Krishna vetthi");
console.log("Krishna vetthi");

/*
while loop : Control flow statement that allows code to be exected repeatedly based on a givencondition
Syntax:
while (condition) {
   code to execute till it terminates
}
*/

let number = 5;

while(number > 0){
    console.log("Krishna vetthi");
    number--;//4,3,2,1
}


/*
do while loop:
Syntax:
do{
    statements...
}while(condition);
*/

let number = 5;
do{
    console.log("Krishna vetthi");//1,2,3,4,5
    number--; 
}while(number>0);//4,3,2,1,0


/*
for loop
Syntax:
for (initialization; condition; updation) {
   // code
}
*/

for(let number = 5; number >0; number--){
    console.log("Krishna vetthi");
}


//Assignment - Write JS code to find whether 78 is prime number or not?