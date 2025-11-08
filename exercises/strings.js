// Strings (Cadenas de caracteres)

// a)
var str = "Que tal a todos!!"
var uppetText = str.toUpperCase();
// console.log(uppetText);

// b)
var str2 = "Hola, como están todos!!";
var sub1 = str2.substring(0, 5);
// console.log(sub1);

// c)
var str3 = "El mejor lenguaje es JavaScript";
var sub2 = str3.substring(28, 31);
// console.log(sub2);

// d)
var str4 = "HELLO World";

var sub3 = str4.substring(0, 1).toUpperCase();
var sub4 = str4.substring(1, 10).toLowerCase();

var result = sub3 + sub4;
// console.log(result);

// e)
var str5 = "Hello World";
var indx_blank_space = str.indexOf(" ");
// console.log(indx_blank_space);

// f)
var str6 = "tecnicatura superior";
var idx_str6_back_space = str6.indexOf(" ") + 1;

var word1 = str6.substring(0, idx_str6_back_space);
var word2 = str6.substring(idx_str6_back_space, 20);

var formatter_word1 = word1.substring(0, 1).toUpperCase() + word1.substring(1, 12).toLowerCase()
var formatter_word2 = word2.substring(0, 1).toUpperCase() + word2.substring(1, 8).toLowerCase()

var formatter_str6 = formatter_word1 + formatter_word2;
console.log(formatter_str6);





