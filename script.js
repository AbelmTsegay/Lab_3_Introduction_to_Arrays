
let numbers = ["1","2","3","4","5","6"]; /* list of my array*/ 

console.log(numbers);

console.log(numbers.at(0));     /* first number of array*/
console.log(numbers.at(-1));    /* last number of array*/
console.log(numbers.at(3));    /* middle number of array */

console.log(numbers.length);  /* number of items */

numbers.pop("5");             /* removing last number from array */
console.log(numbers);

numbers.push("13");           /* addding number 13 to the end */
console.log(numbers);

let large = numbers.find( number => number >= 14)   /* Showing a undefined number instead of a number from my array */
console.log(large);


for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);                    /* Goes through the new array with the new number */ 
}

numbers.forEach((value, index) => {             
    console.log(`${index} : ${value}`)}); 

let [firstNumbers, secondNumbers, ...restNumbers] = numbers
console.log(firstNumbers);
console.log(secondNumbers);
console.log(restNumbers);






