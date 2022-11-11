//Selecting Single Elements
let val;
//Single Elements


//**document.getelementById()
val = document.getElementById('header');
val = header.id;
val = header.className;

val = document.getElementById('header');

val.style.fontSize='50px';
val.style.color='grey';
val.style.fontFamily='arial'

document.getElementById('header').innerText='AfterChange';
document.getElementById('header').innerHTML='<b>AfterChangeAsHtml</b>'

console.log(className);

//**document.querySelector()
console.log(document.querySelector('#header')); //İd si header olan
console.log(document.querySelector('.card-header')); //Classı card-header olan 
console.log(document.querySelector('div')); 
document.querySelector('li').style.color='green'; //Bulduğu ilk li elemanını bize getirir.
document.querySelector('li:last-child').style.color='blue'; //Son eleman seçimi
document.querySelector('li:nth-child(2)').style.color='yellow'; //sıraya göre eleman seçimi
document.querySelector('li:nth-child(3)').textContent='afterChange';

//**Elementin classını değiştirme
document.querySelector('li').className='list-group-item list-group-item-primary'; //Yeni class ekleme.Var olan silinir
document.querySelector('li:nth-child(2').classList.add('active');
