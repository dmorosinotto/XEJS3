import {greet} from './greet';

greet(2000,"Pippo");            //Hello Pippo         - Will greet #1 in 2 sec
greet("XE", "ES6", "rocks!");   //Hello XE ES6 rocks! - Will greet #3 in 5 sec
greet();                        //Hello               - Will greet #0 in 1 sec

/*
// Includere questa parte quando faccio il BUNDLE per mostrare anche le Class
import Greeter from './Greeter';
var zio = new Greeter("Paperino");
zio.greetAfter();				//Hello Paperino	  - Will greet #1 in 3 sec
zio.greetAfter({title: "Zio"}); //Hello Zio Paperino  - Will greet #2 in 3 sec
zio.greetAfter({nsec:4});		//Hello Paperino	  - Will greet #1 in 4 sec
*/