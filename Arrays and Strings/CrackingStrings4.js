/*
Write a method to decide if two strings are anagrams or not.
*/
str1 = "NON";
str2 = "ONaN";
var a =0;
/*
for (var i=0;i<str1.length;i++)
{
	for(var j=0;j<str2.length;j++)
	{
		if(str1.charAt(i) == str2.charAt(j))
		{
			a++;
		}
		
	}

}
	if(a==0)
	{
		console.log("not a anagram");
	}
	else
	{
	    console.log("is a anagram");
	}
	*/

////////////////////////////////////////////////////////////
//sort both the arryas n check 
var str = [];
for(var i=0; i<str1.length; i++)
{
    str[i] = str1.charAt(i);
}
var string1 = str.sort();
console.log(string1);

var st =[];
for(var j=0;j<str2.length;j++)
{
	st[j] = str2.charAt(j);
}
var string2 = st.sort();
console.log(string2);

if(string1.length != string2.length)
{
console.log("not a anagram");
}
else
{

for(var k=0;k<string1.length;k++)
{
	if (string1[k]!=string2[k])
	{
		a++;
	}
}
if(a!=0)
	{
		console.log("not a anagram");
	}
	else
	{
	    console.log("is a anagram");
	}
}
///////////////////////////////////////////////////////////////

