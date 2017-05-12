//Implement an algorithm to determine if a string has all unique characters. What if you
//can not use additional data structures?
console.log("Hello, World!")

var str = "abcde";
var boolArray = [];

for(var i=0; i<256; i++)
{
    boolArray[i] = false;
}

//console.log(boolArray);

for(var i=0; i<str.length; i++)
{
    // console.log(str.charAt(i));
    // console.log(str.charAt(i).charCodeAt());
    if (boolArray[str.charAt(i).charCodeAt()] == false)
    {
        boolArray[str.charAt(i).charCodeAt()] = true;
    }
    else 
    {
        console.log("not a unique string");//return true
        return;
    }
}

console.log("unique string");// return false