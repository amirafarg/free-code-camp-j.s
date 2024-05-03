// let character = "Hello";
let count = 8;

let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows);

// step-21

// A method in JavaScript is a function
// that's associated with certain values or objects. An example you've already encountered is the
//  .log() method, which is part of the console object.
// Arrays have their own methods, and the first you will explore is the .push() method. 
// This allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:
// array.push(12);
// Use .push() to add the string "freeCodeCamp" to the end of your rows array.
//  Add this code before your console.log so you can see the change you made to your array.

rows.push("FreeCodeCamb");

// step-22

// Another method essential for this project is the .pop() method.
//  It removes the last element from an array and returns that element.
// When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.
// Declare a popped variable,
//  and assign it the result of rows.pop(). Then, log your popped variable.

let popped;
rows.pop();
console.log(popped);

// step-23

// You should have seen "freeCodeCamp" printed to the console. This is because .pop() returns the value that was removed from the array - 
// and you pushed "freeCodeCamp" to the end of the array earlier.
// But what does .push() return? Assign your existing rows.push() to a new pushed variable, and log it.

let pushed = rows.push("FreeCodeCamb");

// step-24

// Were you expecting to see 4 in the console?
//  .push() returns the new length of the array, after adding the value you give it.
// It is important to be aware of what values a method returns. Take some time to experiment with .push() and .pop(). When you are ready, 
// remove all of your .push() and .pop() calls, and your console.log statements.

// step-25

// Change your rows declaration to be assigned an empty array again.
// Also, change your 'Hello' string to use double quotes again. Generally, it does not matter which of the two you prefer,
//  but you will want to be consistent in that choice throughout your project.

// step-26

// The let keyword allows a variable to be reassigned. This means you could change character later to be a completely different value.
// For this project, you will not want to change these variable values. So instead, you should use const to declare them. const variables are special.
// First, a const variable cannot be reassigned like a let variable. This code would throw an error:
// const firstName = "Naomi";
// firstName = "Jessica";
// A const variable also cannot be uninitialized. This code would throw an error:
// const firstName;
//Replace your let keywords with const.

// step-27

// You are now ready to start building your pyramid generator.
//  Your character variable will serve as the building block for the pyramid.
// "Hello" might not work very well for that. Change the value of character to be the hash character "#".

const character = "#";

// step-28

// To generate a pyramid, you will need to create multiple rows. When you have to perform a task repeatedly until a condition is met, you will use a loop. There are many ways to write a loop.
// You are going to start with a basic for loop. for loops use the following syntax:

// for (iterator; condition; iteration) {
//   logic
// In the upcoming steps,
//  you'll explore each component of a loop in detail. For now, construct a for loop that includes the terms "iterator", "condition", and "iteration" for the three components. Keep the loop body, the section within the curly braces {}, empty.

for ("iterator"; "condition"; "iteration") {

}

// step-29

// Your loop now needs a proper iterator. The iterator is a variable you can declare specifically
//  in your for loop to control how the loop iterates or goes through your logic.
// It is a common convention to use
//  i as your iterator variable in a loop. A for loop allows you to declare this in the parentheses (). For example, here is a for loop that declares an index variable and assigns it the value 100.
// for (let index = 100; "second"; "third") {
// }
// Replace the string "iterator" with a let declaration for the variable i.
//  Assign it the value 0 to start. This will give the i variable the value 0 the first time your loop runs.

for (let i = 0; "condition"; "iteration") {

}

// step-30

// The condition of a for loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.
// In JavaScript, a Boolean value can be either true or false. These are not strings - you will learn more about the difference later on.
// For now, you will use the less than operator (<). This allows you to check if the value on the left is less than the value on the right.
//  For example, count < 3 would evaluate to true if count is 2, and false if count is 4.
// Replace your "condition" string with a condition to check if i is less than count.

for (let i = 0; i < count; "iteration") {

}