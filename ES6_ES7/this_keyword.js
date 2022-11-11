//ES5
let list = {
    category : 'phone',
    names : ['Xaomi Redmi','Samsung Note 10','Iphone13 Pro'],
    call : function(){
        var self = this;
        this.names.map(function(name){
            console.log(`${name} ${self.category}`);
        })
    }
}

list.call();


//ES6
let list2 = {
    category : 'phone',
    names : ['Xaomi Redmi','Samsung Note 5','Iphone11 Pro'],
    call : function(){
        this.names.map((name)=>{
            console.log(`${name} ${this.category}`);
        })
    }
}

list2.call();

//ES5
function Player(){
    this.health = 0;
    this.addHealth = function(){
        var self = this;
        this.HpUp = setInterval(function(){
            console.log(++self.health);
        },1000)
    }
}

let p1 = new Player();
console.log(p1.addHealth());


//ES6
function Player2(){
    this.health = 0;
    this.addHealth = function(){
        this.HpUp = setInterval(() => {
            console.log(++this.health);
        },1000)
    }
}

let p2 = new Player2();
console.log(p2.addHealth());