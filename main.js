//Storing a person name in a variable with random casing
var personName = "AmMaD";
//convert persin name into lower case
var lowerCase = personName.toUpperCase();
console.log(lowerCase);
//convert persin name into upper case
var upperCase = personName.toLowerCase();
console.log(upperCase);
//convert persin name into upper case by slicing 
var titleCase = personName.charAt(0).toUpperCase() + personName.slice(1, 5).toLowerCase();
console.log(personName.charAt(0).toUpperCase() + personName.slice(1, 5).toLowerCase());
