//Keyboard Events

const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');


// input.addEventListener('keydown',eventHandler);
// input.addEventListener('keyup',eventHandler);
input.addEventListener('keypress',eventHandler);
//input.addEventListener('focus',eventHandler); //İnput seçildiği anda. 
//input.addEventListener('blur',eventHandler); //İnput seçimi bitince.
// input.addEventListener('cut',eventHandler);
// input.addEventListener('paste',eventHandler);
// input.addEventListener('select',eventHandler); //Text in herhangi bir ksımı seçildiğinde.


//form.addEventListener('submit',eventHandler);
select.addEventListener('change',eventHandler);


function eventHandler(e){
    console.log('event type '+ e.type);
    //console.log('key code:'+e.keyCode);
    console.log('value:' + e.target.value); //Target = input alanı. yani ordaki value yi almış oluyoruz
    if (e.keyCode == 99) {
        console.clear();
    }
    e.target.style.backgroundColor='#ff23'
    
    e.preventDefault(); //Form submit olunca sayfa refresh olmayacak.
}