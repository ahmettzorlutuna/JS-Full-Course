//Logger daki modülü buraya dahil ediyoruz.
//Kullanım şekli: CommonJS Module Syntax
const logger = require('./logger');

logger.log("log1");
console.log(logger.password);
logger.foo("Ahmet");
//Node modüle export ettiğimiz constructora ait log fonksiyonunuz
logger.Buz.log();


//Node modülün içindeki paketi dahil etme
var _ = require('underscore');
var myArray = [7,13,4,28,34];
console.log(_.min(myArray));


