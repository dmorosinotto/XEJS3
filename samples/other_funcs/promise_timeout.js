//PUBBLICATO SU: http://www.es6fiddle.net/i8bqx08m/
import {httpGET} from 'promise_httpget';

function timeout(ms, promise) {
  return new Promise(function (resolve, reject) {
    promise.then(resolve);
    setTimeout(function () {
      reject(new Error('Timeout after '+ms+' ms')); // (A)
    }, ms);
  });
}

timeout(5000, httpGET('http://example.com/file.txt'))
.then(function (value) {
    console.log('Contents: ' + value);
})
.catch(function (reason) {
    console.error('Error or timeout', reason);
});