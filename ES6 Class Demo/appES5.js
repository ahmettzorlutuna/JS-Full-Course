function Course(title,instructor,image){ //Formdan aldığımız bilgiler ile bir Class(Sınıf) türeteceğiz
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

//Aşağıda yapılacak işlemleri direk burada fonksiyon olarak yazabiliriz. Ancak Her yapılacak işlem için de 
//Class şeklinde gruplandırısak daha düzgün bir kod yazmış oluruz
function UI(){
}

UI.prototype.addCourseToList = function(course){
    const list = document.getElementById('course-list');
    var html = `
        <tr>
            <td><img class='kücük' src='/ES6 Class Demo/img/${course.image}'></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger"></td>
        </tr>
    `;

    list.innerHTML += html;
}
UI.prototype.clearControls = function(){
    const title = document.getElementById('title').value="";
    const instructor = document.getElementById('instructor').value="";
    const image = document.getElementById('image').value="";
}

document.getElementById("new-course").addEventListener("submit",function(e){
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Course sınıfından obje türetme
    const course = new Course(title,instructor,image);
    console.log(course);

    //Creating UI
    const ui = new UI();
    //**Course objesi üzerinden yapılabilecek işlemler**

    //Save object to DB

    //add course to list
    ui.addCourseToList(course);
    //clear controls
    ui.clearControls();



    e.preventDefault();
})