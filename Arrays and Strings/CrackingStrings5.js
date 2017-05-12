/*
1.5 Write a method to replace all spaces in a string with ‘%20’.

*/

var str = "hello mr how do you do?";

console.log("str = "+ str);

var replaced = str.split(' ').join('%20');

console.log ("new string = "+replaced);