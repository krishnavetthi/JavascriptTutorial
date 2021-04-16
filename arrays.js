//Arrays in Javascript 

var arrayOne = [1,2,3,4,5];
// arrayOne[0] = 1;
// arrayOne[1] = 2;
// arrayOne[2] = 3;
// arrayOne[3] = 4;
// arrayOne[4] = 5;

console.log(arrayOne);
// console.log(arrayOne[1]);

//reverse() -  used to reverse the array

let arrayTwo = arrayOne.reverse();
console.log(arrayTwo);

//array.length - prints number of elements inside an array.
console.log(arrayOne.length);

//concat - used to combine 2 or more arrays

let animals = ["Lion", "Cow","Dog"];
let animalBabies = ["Cub", "Calf", "Puppy"];

let newAnimalsArray = animals.concat(animalBabies);
console.log(newAnimalsArray);

var numbersArray = [10, 20, 30, 40, 50];
//push() - adds one or more elements to the end of an array.
numbersArray.push(60);
console.log(numbersArray);

//unshift() - adds one or more elements to the begining of an array.
numbersArray.unshift(0);
console.log(numbersArray);

//pop() - removes the last element from an array.
numbersArray.pop();
console.log(numbersArray);

//shift() - removes the first element from an array.
numbersArray.shift();
console.log(numbersArray);


//Assignment - Write JS code to check whether the array elements [10, 20, 30, 40, 49] are divisible by 10 or not?