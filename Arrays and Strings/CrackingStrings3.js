/*
Design an algorithm and write code to remove the duplicate characters in a string
without using any additional buffer. NOTE: One or two additional variables are fine.
An extra copy of the array is not.
FOLLOW UP
Write the test cases for this method.
*/
var str = "aaaaaaaaa";
console.log(str)
var boolArray = [];

for(var i=0; i<256; i++)
{
    boolArray[i] = false;
}
var newstring =''
var duplicate = ''
for( var i = 0; i < str.length; i++)
{
	if (boolArray[str.charAt(i).charCodeAt()] == false)
	{
		boolArray[str.charAt(i).charCodeAt()] = true
		newstring += str[i]
		
	}
	else 
	{
		duplicate += str[i]
	}

}
console.log(newstring)
console.log(duplicate)


