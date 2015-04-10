//PUBBLICATO SU: http://www.es6fiddle.net/i8bt27tq/
let obj = {};
let dict = new Map();
    
dict.set(obj, 123);
dict.get(obj)		//123
dict.has(obj)		//true
dict.delete(obj);	//true
dict.has(obj);		//false

let arr = [5, 1, 5, 7, 7, 5];
let unique = [...new Set(arr)]; // [ 5, 1, 7 ]