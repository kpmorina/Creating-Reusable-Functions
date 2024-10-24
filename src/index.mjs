/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 *
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
  const strArray = str.split("");
  const revArray = strArray.reverse();
  const revString = revArray.join("");
  return revString;
}

function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

function reverseString4(str) {
  if (str === "") return "";
  else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
  return str === "" ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"));
console.log(reverseString2("!dlroW olleH"));
console.log(reverseString3("!dlroW olleH"));
console.log(reverseString4("!dlroW olleH"));
console.log(reverseString5("!dlroW olleH"));

//Part 1: Thinking Functionally
Sum of an Array of Numbers
function sumArray(numbers) {
return numbers.reduce((acc, num) => acc + num, 0);
}

Average of an Array of Numbers
function averageArray(numbers) {
return sumArray(numbers) / numbers.length;
}

Longest String in an Array of Strings
function longestString(strings) {
return strings.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

Strings Longer Than a Given Length
function stringsLongerThan(strings, length) {
return strings.filter(str => str.length > length);
}

Print Numbers Using Recursion
function printNumbers(n) {
if (n > 0) {
printNumbers(n , 1);
console.log(n);
}
}

//Part 2: Thinking Methodically
Given the sample data, here are examples of how to implement callback functions alongside Array methods:

const data = [
{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by age
data.sort((a, b) => a.age b.age);

// Filter to remove entries with age greater than 50
const filteredData = data.filter(person => person.age <= 50);

// Map to change "occupation" to "job" and increment age
const mappedData = data.map(person => ({
...person,
job: person.occupation,
age: Number(person.age) + 1,
}));
