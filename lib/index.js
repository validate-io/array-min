/**
*
*	VALIDATE: array-min
*
*
*	DESCRIPTION:
*		- Validates if a value is an array in which no element exceeds a minimum value.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// ARRAY MIN //

/**
* FUNCTION: isArrayWithMin( value, min )
*	Validates if a value is an array in which no element exceeds a minimum value.
*
* @param {*} value - value to be validated
* @param {Number} min - minimum allowed value
* @returns {Boolean} boolean indicating if a value is an array in which no element exceeds a minimum value
*/
function isArrayWithMin( value, min ) {
	if ( !isArray( value ) ) {
		return false;
	}
	for ( var i = 0; i < value.length; i++ ) {
		if ( value[ i ] < min ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isArrayWithMin()


// EXPORTS //

module.exports = isArrayWithMin;
