'use strict';

const arithmetic = require('../lib/arithmetic.js');

const expect = require('expect');

describe('Arithmetic', function(){
	it('adds two numbers correctly', function(){
		let result = arithmetic.add(1, 4);
		expect(result).toEqual(5);
	})

	it('substracts two numbers correctly', function(){
		let result = arithmetic.sub(1, 4);
		expect(result).toEqual(-3);
	})

	it('properly handles non number values', function(){
		let result = arithmetic.add('foo', 3);
		expect(result).toEqual(null);
	})

	it('properly handles one instead of two arguments', function(){
		let result = arithmetic.add(1);
		expect(result).toEqual(null);
	})
})