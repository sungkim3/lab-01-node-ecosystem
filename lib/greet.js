'use strict';

let greet = module.exports = function(name){
	if (typeof name !== 'string'){
		return null;
	}
	return 'hello ' + name;
}