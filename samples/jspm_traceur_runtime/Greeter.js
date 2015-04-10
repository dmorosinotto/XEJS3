import {greet as _greet} from './greet';

export default class Greeter {	
	constructor(s) {
		this.name = s;
	}
	
	greetAfter( { nsec = 3, title } = {} ) {
		if (!title) {
			_greet( nsec*1000, this.name );
		} else {
			_greet( nsec*1000, title, this.name );
		}
	}
}