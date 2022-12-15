let generate = (function () {
	return function() {
	    let array = [];
	    let num;

	    function randomize(min, max) {
		    return Math.floor(Math.random() * (max-min+1)) + min;
	    }

		  while (array.length < 100 ) {
				num = randomize(1, 100);

				if (array.length === 0) {
					array.push(num);
				}
				var flag = true;

			for (var i = 0; i < array.length; i++) {
				if (array[i] === num ) {
					flag = false;
					break;
				}
			}
				if (flag) {
					array.push(num);
				}
		}
		return array;
	}
	}());

console.log(generate());