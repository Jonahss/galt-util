Function.prototype.help = function() {
  console.log(this.comment || "no comment for this function")
}

function pad(num, len) {
  var numString = "" + num;

  while (numString.length < len) {
    numString = ' ' + numString;
  }

  return numString;
}
pad.comment = `
pad:
Pad numbers to a contant length

Here's an example:
pad(1,4)     //"${pad(1, 4)}"
pad(12,4)    //"${pad(12, 4)}"
pad(123, 4)  //"${pad(123, 4)}"
`

function dots(i) {
	if (i == 0)
		return '';
	var arr = new Array(i);
	for (var x = 0; x < arr.length; x++)
		arr[x] = '.';
	return arr.join('');
}
dots.comment = `
dots:
Create a string consisting of any number of periods

Here's an example:
dots(0) //"${dots(0)}"
dots(1) //"${dots(1)}"
dots(2) //"${dots(2)}"
dots(3) //"${dots(3)}"
`

module.exports.pad = pad
module.exports.dots = dots
