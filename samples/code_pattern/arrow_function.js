//PUBBLICATO SU: http://www.es6fiddle.net/i8ba60bi/
//arrow function => //E' LO STESSO DI function(..){return ...}
const square = x => x * x;		
const add = (a, b) => a + b;
const pi = () => 3.1415;	

var nums = [1,2,5,6,7,10], fives=[];
// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: ["foo", "bar"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
}

//unit test
console.log(square(5));	//25
console.log(add(3, 4));	//7
console.log(pi());		//3.1415
console.log(fives);		//5, 10
bob.printFriends();		//Bob knows foo, Bob knows bar