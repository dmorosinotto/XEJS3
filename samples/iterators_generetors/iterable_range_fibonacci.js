//PUBBLICATO SU: http://www.es6fiddle.net/i8bmieon/
function Range(to, from=0) {
  return {
    [Symbol.iterator]() {      
      let n=Math.max(to,from);
      let i=Math.min(to,from)-1;
      return {
        next: function() {          
          return { value: ++i, done: i>n };
        }
      };
    }
  };
}

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur };
      }
    };
  }
};

console.log([...Range(10)]);

for (let n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000) break;
  console.log(n);
}