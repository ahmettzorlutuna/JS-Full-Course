//Local Storage

let val;

const firstName = localStorage.setItem('firstName','Sebastian');

const lastName = localStorage.setItem('lastName','Vettel');
let hobbies = ['kitap','gezmek']

//Get item 
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');

//Remove item
// localStorage.removeItem('firstName');

//clear
localStorage.clear();

//Set arrayy to storage
localStorage.setItem('hobbies',JSON.stringify(hobbies)); //Array objesini obje olarak yazdırma
val = JSON.parse(localStorage.getItem('hobbies'));

console.log(val);
console.log(localStorage);

//Session Storage (Tarayıcı kapandığı an bilgile gider)

const city = sessionStorage.setItem('city','Germany');

const country = sessionStorage.setItem('country','Unknown');

console.log(sessionStorage);