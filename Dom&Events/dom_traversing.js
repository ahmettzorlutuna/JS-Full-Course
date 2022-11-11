// Traversin the Doms

let val;

let list = document.querySelector('.list-group');

val = list;

val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //Return 3 text node
val = list.childNodes[1].nodeType; //Return 1 element node
val = list.childNodes[1].nodeName; //Return li


val = list.children;
val = list.children[2].textContent = 'Text content';
val = list.children[3].children; //li nin içindeki a etiketi

val = list.firstChild; //İlk node karşımıza çıkacaktır. Node listin ilk elemanı
val = list.firstElementChild; //ilk elementi alırız. HTML collection.

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount; //Etiket sayısı.

val = list.parentNode; //Bir üst yani parent node a ulaşım.
val = list.parentElement; //Bir üst yani parent node a ulaşım.
val = list.parentElement.parentElement; //İki üst parent

val = list.children[0].nextSibling; //Bir sonraki elemente node halinde ulaşırız.
val = list.children[0].nextElementSibling; //Bir sonraki elemente html etiketi şeklinde ulaşırız.

val = list.children[3].previousSibling; //Bir önceki elemente node halinde ulaşırız.
val = list.children[3].previousElementSibling; //Bir önceki elemente html etiketi şeklinde ulaşırız.


for (let i = 0; i < list.childNodes.length; i++) {
    if(list.childNodes[i].nodeType === 3){
        console.log(list.childNodes[i]);
    };
    
};


console.log(val);