//1- Global variable naming conflicts
//İsimlendirme Karışıklıkları
//script.js
// var name = 'Ahmet';

// //app.js
// var name = 'Ahmet2';
// console.log(name);

//2- Encapsulation

var Counter = {
    number : 0,
    increment : function(){
        return ++this.number;
    },
    decrement : function(){
        return --this.number;
    }
}

console.log(Counter.increment());
console.log(Counter.decrement());
Counter.number = 1;
console.log(Counter.increment());

//IIFE(Immediately Invoked Function Expressions)
//Birinic problemin çözümü
(function(){
    var name = 'Ahmet';
    console.log(name);
})();

////////////////////7

(function(){
    var name = 'Ahmett';
    console.log(name);
})();

var Module = (function(){
    //Private Members
    let number = 0;

    let increment = function(){
        return ++number;
    }

    let discrement = function(){
        return --number;
    }
    return {
        //Public Members
        increment,
        discrement,
        number
    }
})();

//Diğer Kullanımı

var Module2 = (function(){
    var privateMethod = function(){
        console.log("Private meth")
    }

    return{
        publicMethod : function(){
            console.log("Public Meth")
        },
        publicMethod2 : function(){
            console.log("Public Meth2")
        },privateMethod //Private methodun public hale getirilmesi !!
    }
})();

Module2.publicMethod();
Module2.publicMethod2();
Module2.privateMethod();

// console.log(Module.increment());
// console.log(Module.increment());
// Module.number = 10;
// console.log(Module.increment());

