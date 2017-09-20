'use strict';

const greet = require('../lib/greet.js');

const expect = require('expect');

describe('Greet', function(){
	it('properly handles non string values', function(){
		let result = greet(5);
		expect(result).toEqual(null)
	})

	it('properly greets the string', function(){
		let result = greet('world');
		expect(result).toEqual('hello world');
	})
})