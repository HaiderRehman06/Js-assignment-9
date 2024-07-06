// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare



// var table = +prompt("Enter any number");
//  for (var i = 0; i <= 10; i++) {
//     console.log(`${table} * ${i} = ${table * i}`)
//  }



 // 2. ARRAY ELEMENTS KA SUM PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements ka sum find kar k print kare


// const numbers = [];

// for (let i = 0; i < 5; i++) {
//     const userInput = parseFloat(prompt(`Enter number ${i + 1}:`));
//     numbers.push(userInput);
// }
// let sum = 0;
// for (const num of numbers) {
//     sum += num;
// }
// console.log(`Sum of the numbers: ${sum}`);



// 3. ARRAY KA SUB SE BARA NUMBER PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare


// var numbers = [];

// for (let i = 0; i < 5; i++) {
//     var lnumber = parseFloat(prompt(`Enter number ${i + 1}:`));
//     numbers.push(lnumber);
// }
// let largestNumber = numbers[0];
// for (var num of numbers) {
//     if (num > largestNumber) {
//         largestNumber = num;
//     }
// }
// console.log(`The largest number is: ${largestNumber}`);


// 4. USER SE STRING LE AND USKO ULTA PRINT KARE
// DESCRIPTION:
// 1. user se koi b string input le
// 2. usko reverse me print karde e.g: mehtab -> bathem

// var input = prompt("Enter your name");
 
// var reveses = input.split('').reverse().join('');

// console.log(`Reverse is : ${reveses}`);


// 5. FACTORIAL
// DESCRIPTION:
// 1. user se koi b NUMBER input le
// 2. us number ka factorial find kr k print kare
// 3. factorial def:
// the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
// 4 * 3 * 2 * 1 = 24

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let factorial = 1;
//         for (let j = 2; j <= n; j++) {
//             factorial *= j;
//         }
//         return factorial;
//     }
// }

// var myinput = parseInt(prompt("Enter a non-negative integer:"));
// if (!isNaN(myinput) && myinput >= 0) {
//     var result = factorial(myinput);
//     console.log(`Factorial of ${myinput} is ${result}`);
// } else {
//     console.log("Invalid input. Please enter a non-negative integer.");
// }