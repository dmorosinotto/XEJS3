import greet from './greet';
import {gen as Ciao} from './gen';

greet(2000,"Pippo");            //Hello Pippo         - Will greet #1 in 2 sec
greet("XE", "ES6", "rocks!");   //Hello XE ES6 rocks! - Will greet #3 in 5 sec
greet();                        //Hello               - Will greet #0 in 1 sec
greet(...Ciao(3));