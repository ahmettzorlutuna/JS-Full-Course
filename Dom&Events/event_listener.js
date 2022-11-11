//Event listener

const btn = document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('#btnAddNewTask');


btn.addEventListener('click',function(event){
    let val;

    val = event;

    val = event.type;
    val = event.target.id;
    console.log(val);

    event.preventDefault(); //Htmldeki href e gitmez.
});

// btn.addEventListener('click',btnClick);
// btn2.addEventListener('click',btnClick2)


// function btnClick() {
//     console.log('Btn clicked')
// }

// function btnClick2() {
//     console.log('Btn clicked2')
// }