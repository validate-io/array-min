/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isValid = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-array-min', function tests() {

	it( 'should export a function', function test() {
		expect( isValid ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isValid( ['b','c','d'], 'b' );
		assert.ok( bool );

		bool = isValid( [1,2,3], 1 );
		assert.ok( bool );

		bool = isValid( [], 'b' );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			{},
			['b','c','d']
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isValid( value, 'c' );
		}
	});

});
