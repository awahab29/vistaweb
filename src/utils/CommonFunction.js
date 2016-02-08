/**
 * Created by Muhammad Faizan on 02-Feb-16.
 */

/**
 * @param {number} n - number you want to make ordinal of
 * @return {string} return - a string that will be ordinal form of parameter
 */
module.export = {
	getOrdinal = n => {
		var s=["th","st","nd","rd"],
			v=n%100;
		return n+( s[ (v-20) % 10 ] || s[v] || s[0] );
	}
}
