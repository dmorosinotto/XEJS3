//PUBBLICATO SU: http://www.es6fiddle.net/i8bhu83f/
let arr = ['foo', 'bar', 'baz'];
 
//for of use [Symbol.iterator] internally
for (let item of arr) {
  console.log(item);
}

console.log("Pseudo implementazione di for of");
//explicit use of Iterator object
let it = arr[Symbol.iterator]();
for(let curr=it.next(); !curr.done; curr = it.next() ) {
  //consume curr.value
  console.log(curr.value);
}