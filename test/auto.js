var cosf = require('./../cosf.js');

var blob = {
  compact: true,
  schema: 0,
  buffer: new Buffer('cat attack'),
	fish: {
		age: 27,
		hears: true,
		breaths: true,
		color: {
			base: "Yellow",
			spots: null,
			eyes: "Black"
		},
		speed: "5m/s",
		eats: [
			"sea-weed",
			"small insects"
		]
	}
};
var data;

data = cosf.encode(blob);
var json = JSON.stringify(blob);
console.log('Compression:', Math.floor(data.length/json.length*100, 2) + '%');


console.log('_____________________________\n');

blob.self = blob;
data = cosf.encode(blob);
data = cosf.decode(data);
console.log('Referencing accurate?', data.self == data);



console.log('_____________________________\n');

data = cosf.encode({});
data = cosf.decode(data);
console.log('Blank object valid?', data instanceof Object && Object.keys(data).length === 0);

data = cosf.encode([]);
data = cosf.decode(data);
console.log('Blank array valid?', data instanceof Array && data.length === 0);