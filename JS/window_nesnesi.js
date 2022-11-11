//Window Object

let val;
var a = 10;
function bdg(){
    return 0;
};

val = window;

//Alert
alert('Merhaba!');

//Prompt
var val = prompt('Heyyy');

//Confirm
val = confirm('Are you sure ?')
if (val) {
    console.log('He');
}else{
    console.log('Nain');
}

val = window.location.hostname +':'+window.location.port;
val = window.location.origin;
//window.location.href='https://balkanelektronik.net';
//val = window.location.search;
val2 = document.getElementById('header');

console.log(val2);