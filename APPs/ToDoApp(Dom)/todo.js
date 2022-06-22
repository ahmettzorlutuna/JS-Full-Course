// User Interface Variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
// const items = ['item 1','item 2','item 3','item 4'];
let items;

//Laod items
loadItems();

//Event listenerları Çağırma
eventListeners();

function eventListeners() {
    //Submit Event
    form.addEventListener('submit', addNewItem);
    //Delete an item
    taskList.addEventListener('click', deleteItem);
    //Delete All items
    btnDeleteAll.addEventListener('click', deleteAllItems);
};

function loadItems() {

    //İtemsları local storagedan çekme
    items = getItemsFromLS();

    //Arraydan itemları yazdırma
    items.forEach(function (item) {
        createItem(item);
    });
};

//Get Items From Local Storage
function getItemsFromLS() {
    //Varsa LS den itemları aldık
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    };
    return items;
};

//Set Item to Local Storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text); //Text i listeye attık
    localStorage.setItem('items',JSON.stringify(items)); //Listedeki en son attığımız değeri local storage a ekledik.
}

function deleteItemFromLS(text){
    items = getItemsFromLS(); //Yukarıdaki fonkisyon yardımı ile itemsları aldık
    items.forEach(function(item,index){ //aldığımız itemslar üzerinde geziniyoruz.
        if(item===text){
            items.splice(index,1);
        }
    });
    localStorage.setItem('items',JSON.stringify(items)); //Yeni listeyi local storage a kaydettik.
}  

function createItem(text) {
    //Create Li Element
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-action';
    li.appendChild(document.createTextNode(text)); //Li nin text i 

    //Create a Element
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //Append a to li
    li.appendChild(a);

    //Append li to ul
    taskList.appendChild(li);
};

//Add New İtem
function addNewItem(e) {
    if (input.value === '') {
        alert('Lütfen bir tane todo giriniz.')
    }

    //Create item
    createItem(input.value);

    //Save to LS
    setItemToLS(input.value);

    //Clear input
    input.value = '';

    e.preventDefault();
};

//Delete Item
function deleteItem(e) {

    if (e.target.className === 'fas fa-times') {
        if (confirm('Silmek istediğinize emin misiniz ?')) {
            if (e.target.className === 'fas fa-times') {
                e.target.parentElement.parentElement.remove();
                e.preventDefault();

                //Delete item from LS
                deleteItemFromLS(e.target.parentElement.parentElement.textContent);
            }
        }
    }

    e.preventDefault();
};

//Delete All Items
function deleteAllItems(e) {

    //taskList.innerHTML=''; // Tasklist classına boş bir html değeri atadık ve tüm değerler gitti.

    if (confirm('Hepsini silmek istediğinize emin sin mi ?')) {
        while(taskList.firstChild){ //Bu while döngüsü tasklistteki elemanların en baştakini sırası ile silecek.
            taskList.removeChild(taskList.firstChild);
        }
        // taskList.childNodes.forEach(function (item) {
        //     if (item.nodeType === 1) {
        //         item.remove();
        //     }
        // });
        localStorage.clear();
    }
    e.preventDefault();
};