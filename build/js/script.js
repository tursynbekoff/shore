'use strict';
var fs = require('fs');
var json = fs.readFileSync('../json/postalcode.json');
var arrObject = JSON.parse(json);
console.log(arrObject);
