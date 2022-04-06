//Selecting Multiple Elements

let val, val1;

//**document.getElementsByClassName()

val = document.getElementsByClassName('list-group-item');
val[1].style.color='blue';
val[1].style.fontSize='30px';

for (let i = 0; i < val.length; i++) {
    const element = val[i];
    console.log(element.style.color='#000');
    console.log(element.style.fontSize='15px');
}


//**document.getElementsByTagName()
val = document.getElementsByTagName('li');
val = document.getElementById('task-list');
val = val.getElementsByTagName('a'); //Ul tagınının altındaki a etiketleri


//document.querySelectorAll()

/**/
val = document.querySelectorAll('li');

val.forEach(function(item,index){
    item.textContent = `${index} - Item`
    item.style.fontSize = '20px'; 
});


/**/
val = document.querySelectorAll('li:nth-child(odd)'); //odd tekil even çoğul child seçimi
val1 = document.querySelectorAll('li:nth-child(even)');
val.forEach(function(item){
    item.style.background = '#808080';
});
val1.forEach(function(item){
    item.style.background = '#DCDCDC'
});

console.log(val);