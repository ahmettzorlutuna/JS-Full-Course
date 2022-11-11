//Creating Elements

//create element

const li = document.createElement('li');

//Add Class
li.className='list-group-item list-group-item-secondary';

//Attribute
li.setAttribute('title','new item');
li.setAttribute('data-id','7');

//text node
const text = document.createTextNode('new itemdır');
li.appendChild(text);

//a for delete

const a = document.createElement('a');
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>'; //Çarpı işaretini a etkiketinin içine koyduk.

//Append a to li
li.appendChild(a);

//Append li to ul
document.querySelector('#task-list').appendChild(li);

console.log(li);