// Returns a random integer from min (inclusive) to max (inclusive)
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a random float from min (inclusive) to max (exclusive)
function randomFloat(min, max) {
	return Math.random() * (max - min) + min;
}

// Takes a number between min1 and max1 and scales it to min2 max2
function scaleNumber(number, min1, max1, min2, max2) {
	var range1 = max1 - min1;
	var range2 = max2 - min2;
	var percent = (number - min1) / range1;
	return range2 * percent;
}

// Takes a number and converts it to a string representing that number in scientific notation
function convertToSciNotation(num) {
    var p = 0;
    while (Math.pow(10, p) <= num) {
        p += 1;
    }
    p -= 1;
    num /= Math.pow(10, p);
    var decimal = num.toFixed(2);
    return decimal + " x 10<sup>" + p + "</sup>";
}

// Returns the sum of an array of numbers
var sum = function(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

// Moves the object stored at fromIndex to toIndex and shifts the rest of the array's contents either up or down
var shift = function(array, fromIndex, toIndex) {
	var temp = array[fromIndex];
	if (fromIndex < toIndex) {
		for (var i = fromIndex; i < toIndex; i++) {
			array[i] = array[i + 1];
		}
		array[toIndex] = temp;
	} else {
		for (var i = fromIndex; i > toIndex; i--) {
			array[i] = array[i - 1];
		}
		array[toIndex] = temp;
	}
	return array;
}

// Returns an array with all of its values randomly shuffled
function shuffle(array) {
	for (var i = 0; i < array.length; i++) {
		var r1 = randomInt(0, array.length - 1);
		var r2 = randomInt(0, array.length - 1);
		var temp = array[r1];
		array[r1] = array[r2];
		array[r2] = temp;
	}
	return array;
}

// Returns true if value does not appear in the array, false otherwise
var doesNotEqualAny = function(array, value) {
	for (var i = 0; i < array.length; i ++) {
		if (value === array[i])
			return false;
	}
	return true;
}

// Erases everything from a non-CreateJS enabled canvas
var eraseCanvas = function(canvas) {
	var ctx = canvas .getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}