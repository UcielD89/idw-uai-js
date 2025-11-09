// For
// a)
var lenguajes = ["javascript", "rust", "python", "kotlin", "java"];
/* for (var i = 0; i < lenguajes.length; i++) {
  alert(lenguajes[i]);
} */

// b)
/* for (var i = 0; i < lenguajes.length; i++) {
  var upper_letter = lenguajes[i].substring(0, 1).toUpperCase()
  var all_letters = lenguajes[i].slice(1);
  alert(upper_letter + all_letters);
} */

// c)
var sentence = "";
for (var i = 0; i < lenguajes.length; i++) {
  sentence += lenguajes[i] + "; ";
}
// alert(sentence);

// d)
var list = [];
/* for (var i = 0; i < 10; i++) {
  list.push(i);
  console.log(list);
} */
