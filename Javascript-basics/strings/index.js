//Strings in JavaScript
//Strings are sequences of characters, where each character is a Unicode code point. In JavaScript, strings are enclosed in single or double quotes. For example, 'hello' and "hello" are both strings that represent the text hello.

//"hello".lenght what will be the output and why ?
//The length property of a string returns the number of characters in the string. In this case, the string 'hello' has 5 characters, so the output will be 5.

//indexing in strings in JavaScript?
//In JavaScript, you can access individual characters in a string using bracket notation and the character's index. The index of the first character in a string is 0, and the index of the last character is the length of the string minus 1. For example, the string 'hello' has a length of 5, so the indexes for each character are as follows:
// 'h' -> index 0
// 'e' -> index 1
// 'l' -> index 2
// 'l' -> index 3
// 'o' -> index 4

//"hello"[0] what will be the output and why ?
//In this case, the expression 'hello'[0] accesses the character at index 0 of the string 'hello', which is 'h'. Therefore, the output will be 'h'.

//"hello".indexOf('l') what will be the output and why ?
//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. If no occurrence is found, -1 is returned. In this case, the string 'hello' contains the character 'l' at index 2, so the output will be 2.

//"hello".includes('h') what will be the output and why ?
//The includes() method determines whether a string contains the specified value. In this case, the string 'hello' contains the character 'h', so the output will be true.

//"Hello.startsWith('H') what will be the output and why ?"
//The startsWith() method determines whether a string begins with the characters of a specified string. In this case, the string 'Hello' starts with the character 'H', so the output will be true.

//"Hello.endsWith('o') what will be the output and why ?"
//The endsWith() method determines whether a string ends with the characters of a specified string. In this case, the string 'Hello' ends with the character 'o', so the output will be true.

//"hello".indexOf("ll") what will be the output and why ?
//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. If no occurrence is found, -1 is returned. In this case, the string 'hello' does not contain the substring 'HA', so the output will be -1.

//"hello".slice(2, 4) what will be the output and why ?
//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. In this case, the substring 'll' is extracted from the string 'hello' starting at index 2 (inclusive) and ending at index 4 (exclusive), so the output will be 'll'.

//"hello".toUpperCase() what will be the output and why ?
//The toUpperCase() method returns the calling string value converted to uppercase. In this case, the string 'hello' will be converted to 'HELLO'.
