//PUBBLICATO SU: http://www.es6fiddle.net/i8bnnn0p/
// Generator function, implementing an iterator over objects
function* objectEntries(obj) {
  // In ES6 si possono usare anche Symbol come nomi di proprietà
  // se si vuole iterare su tutto usare Reflect.ownKeys(obj)
  for (let key in obj) {
    yield [key, obj[key]]; // pause and return a value
  }
}
    
var obj = { first: 'John', last: 'Doe' };
for (let [key,value] of objectEntries(obj)) {
  console.log(`${key} : ${value}`);
}