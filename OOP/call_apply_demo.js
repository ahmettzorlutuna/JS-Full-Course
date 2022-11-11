//Demo: Numeric Range
//Bir sayının belirtilen aralıkta olup olmadığı kontrolü

var num = {
    min : 0,
    max : 100,
    checkNumericRange : function(value){
        if(typeof value !== 'number'){
            return false;
        }else{
            return value >= this.min && value <= this.max;
        }
    }
}


//console.log(num.checkNumericRange(-20));

//Call and apply version

var checkNumericRange2 = function(value2){
    if(typeof value !== 'number'){
        return false;
    }else{
        return value >= this.min && value <= this.max;
    }
}

var num1 = {
    min : 10,
    max : 200
}

console.log(checkNumericRange2.call(num1,50));
console.log(num.checkNumericRange.call(num1,70)); //Objenin içindeki fonksiyonuda call ile başka bir obje üzerinde de kullanabilirz.

//Bind

aralık = num.checkNumericRange.bind(num1);
console.log('Bind: ' + aralık(20));


