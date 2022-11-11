//Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

//Click 
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

//Double Click 
btn.addEventListener('dblclick',eventHandler);

//Mouse down
btn.addEventListener('mousedown',eventHandler);
//Mouse up
btn.addEventListener('mouseup',eventHandler);
//Mouse enter
ul.addEventListener('mouseenter',eventHandler); //Task list çerçevesine girdiğinde
//Mouse leave
ul.addEventListener('mouseleave',eventHandler); //Task list çerçevesinden ayrıldığında
//Mouse over
ul.addEventListener('mouseover',eventHandler); //Task listkdeki başka bir elemana geçtiğinde
//Mouse Out
ul.addEventListener('mouseout',eventHandler);
//Mouse Move
ul.addEventListener('mousemove',eventHandler);


function eventHandler(event){
    console.log(`event type : ${event.type}`);
}