//PUBBLICATO SU: http://www.es6fiddle.net/i8bqnnpg/
export function httpGET(url) {
  return new Promise(
    function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.status === 200) {
          // Success
          resolve(this.response);
        } else {
          // Something went wrong (404 etc.)
          reject(new Error(this.statusText));
        }
      }
      request.onerror = function () {
        reject(new Error(
          'XMLHttpRequest Error: '+this.statusText));
      };
      request.open('GET', url);
      request.send();    
    });
}

httpGET('http://example.com/file.txt')
.then( value => console.log('Contents: ', value) )
.catch( reason => console.log('Something went wrong') );