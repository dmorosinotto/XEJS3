//PUBBLICATO SU: http://www.es6fiddle.net/i8ay0eu0/
// list matching 	//POSIZIONALE ORDINE IMPORTANTE!
var [a, , b] = [1,2,3];
console.log(a,b); 	//1 3

// object matching 	//PER NOME QUINDI ORDINE NON IMPORTA!
var {age, first} = {first: "Daniele", last: "Morosinotto", age: 40 };
console.log(first,age);	//Daniele 40

var options = {
        repeat: true,
        save: false,
        colors: [ "red", "green", "blue" ]
    };
// complex matching with raname // FIELD: VAR
var { repeat, save: foo, colors: [ firstColor, secondColor ]} = options;
console.log(repeat, foo, firstColor, secondColor);

// simple swap variable
[b,a] = [a,b];
console.log(a,b); 	//3 1

// extract value from method return (regex.match)
let [all, year, month, day] =
        /^(\d\d\d\d)-(\d\d)-(\d\d)$/
        .exec('2999-12-31');
console.log(day,month);