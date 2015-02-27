// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
	if (obj === undefined || typeof obj === 'function') {
		return 'Not a Valid Format';
		// range --> undefined | function.
	}else{
		if (obj === null || typeof obj !== 'object' && typeof obj !== 'string') {
			// range --> boolean | number.
			return "" + obj;
		} else if(typeof obj === 'string'){
			// range --> string
			return '"' + obj + '"';
		}else {
			// range --> Array | Objects.
			var result = [];

			for (var key in obj) {
				// If it's an array
				if (typeof obj[key] !== 'function' && Array.isArray(obj) && obj[key] !== undefined) {
					result.push(stringifyJSON(obj[key]));
			    // If it's an object
				} else if(typeof obj[key] !== 'function' && obj[key] !== undefined){
					result.push('"' + key + '":' + stringifyJSON(obj[key]));
				}
			}

			if (Array.isArray(obj)) {
				return '[' + result + ']';
			} else {
				return '{' + result + '}';
			}		
		}
	}
}