var customerName = 'Çınar';
var customerLastName = 'Turan';

var fullName = 'Çınar Turan';
var musteriId = '13412341';

var total = 205.6;
var gender = true; // erkek true, kadın false

//Object Type
var adress={ 
    city : 'Kocaeli',
    district : 'İzmit',
    body : 'Ömerağa mah.No:45'
}

//Array
var hobbies = ['Sinema','Kitap','Spor'];

// ** Sipariş toplamları

var order1 = Number('100');
var order2 = Number('150');

var totalOrder = order1 + order2;
console.log(totalOrder)

// ** Sipariş toplamları

var order3 = Number('100.2');
var order4 = Number('150.5');

var totalOrder2 = order3 + order4;
console.log(totalOrder2);

// ** Sipariş toplamları tam sayı olarak

var  order5 = Number('100.2');
var order6 = Number('150.5');

var totalOrder3 = parseInt(order5 + order6);
console.log(totalOrder3);

// ** Doğum yılına göre yaş hesabı

var yearOfBirth = 1970;
console.log(new Date().getFullYear-yearOfBirth);

// ** Karakter sayısı bulma

var goat = 'Lionel Messi';
console.log(goat.length);