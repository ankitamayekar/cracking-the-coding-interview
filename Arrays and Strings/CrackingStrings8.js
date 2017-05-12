/*
Assume you have a method isSubstring which checks if one word is a substring of
another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using
only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
*/

str1 = "ankita"
str2 = "kitaan"
if (str1.length !== str2.length || !str1.length)
		return false; //strings must be of equal length and str1 should not be empty
	var str1Twice = str1 + str1;
	//console.log(str1Twice);
    var n = str1Twice.includes(str2);

    //console.log(" n = "+ n);
    if (n)
    {
        console.log("is substring");
    }
    else
    {
        console.log("not a substring");
    }
    