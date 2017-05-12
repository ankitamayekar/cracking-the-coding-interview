/*
Write code to reverse a C-Style String. (C-String means that “abcd” is represented as
five characters, including the null character.)
*/

var str1 = "helo";
var str = [];
for(var i=0; i<str1.length; i++)
{
    str[i] = str1.charAt(i);
}

var l = str.length;
var a =0;
var b =l-1;
var temp;
while(a<b)
{
    temp = str[a];
    str[a] = str[b];
    str[b] = temp;
	a++;
	b--;
}
//str = str + str;
console.log(str.join(''));