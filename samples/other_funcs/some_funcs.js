//PUBBLICATO SU: http://www.es6fiddle.net/i8bt3ofh/
console.log( 
 Object.assign({}, {n: 1, s: "ciao"}, {b: true, n: 2 }) // MIXIN!!
, Number.isNaN( 0/0 ) 								//true
, Array.from( document.querySelectorAll('div') ) 	//Array VERO!!!
, [1,2,"ciao",true].findIndex(x => x=="ciao") 		//2
); 