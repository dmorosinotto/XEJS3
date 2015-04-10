//PUBBLICATO SU: http://www.es6fiddle.net/i8bqrvas/
function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms); // (A)
  });
}

// Using delay():
delay(5000).then(function () { // (B)
  console.log('5 sec son passati!')
});