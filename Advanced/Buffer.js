const Buffer = require('buffer').Buffer;

var _Name = Buffer.from("Mahak");
var arr = [55,62,17,86,88];

var Buff = Buffer.alloc(1024);
Buff.write('Mahak v2');


console.log(`Length of Name Buffer : ${_Name.length}`);
console.log(`Buffered Data : ${_Name.toString('utf-8')}`);
console.log(`${_Name}`);