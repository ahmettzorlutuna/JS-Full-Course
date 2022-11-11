//Remove and Change

const taskList = document.querySelector('#task-list');

//***Removing elements
taskList.remove();
taskList.childNodes[1].remove(); //Node a göre silme
taskList.children[0].remove(); //Etikete göre silme 
taskList.removeChild(taskList.children[1]);

//** Removing attributes
taskList.children[0].removeAttribute('class');

//**Removing with for
for (let i = 0; i < taskList.children.length; i++) {
    taskList.children[i].removeAttribute('class');
}


//** Replacing Elements h1 elements to card header(div)
const cardHeader = document.querySelector('.card-header');

//**Create element
const h2 = document.createElement('h2');
h2.setAttribute('class','card-header');
h2.appendChild(document.createTextNode('My list'));

const parent = document.querySelector('.card');

parent.replaceChild(h2,cardHeader); //(yeni att,eski att)

let val;

link = taskList.children[1].children[0];

val = link.className;
val = link.classList; //Dom token list.
val = link.classList[1];

link.classList.add('keep');
link.classList.remove('keep');

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','www');

val = link.hasAttribute('href'); //Href attribute u var mı ?


console.log(val);