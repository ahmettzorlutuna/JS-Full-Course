function Course(title, instructor, image) { //Formdan aldığımız bilgiler ile bir Class(Sınıf) türeteceğiz
    this.title = title;
    this.instructor = instructor;
    this.image = image;


}

//Aşağıda yapılacak işlemleri direk burada fonksiyon olarak yazabiliriz. Ancak Her yapılacak işlem için de 
//Class şeklinde gruplandırısak daha düzgün bir kod yazmış oluruz
function UI() {
}

UI.prototype.addCourseToList = function (course) {
    const list = document.getElementById('course-list');
    var html = `
        <tr>
            <td><img class='kücük' src='/ES6 Class Demo/img/${course.image}'></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class="btn btn-danger delete">Sil</td>
        </tr>
        
    `;

    list.innerHTML += html;
}
UI.prototype.clearControls = function () {
    const title = document.getElementById('title').value = "";
    const instructor = document.getElementById('instructor').value = "";
    const image = document.getElementById('image').value = "";
}

UI.prototype.deleteCourse = function (element) {
    if (element.classList.contains('delete')) {
        element.parentElement.parentElement.remove();
    }
    
}

UI.prototype.showAlert = function (message, type) {
    var alert = `
        <div class="alert alert-${type}" role="alert"> 
            ${message}
        </div>
    `;

    const row = document.querySelector('.row');
    //beforeBegin, afterBegin, beforeEnd, afterEnd **Parametreler
    row.insertAdjacentHTML('beforeBegin',alert); //row elementinden önce alert html etiketini ekler.

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },5000);
};



document.getElementById("new-course").addEventListener("submit", function (e) {
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Course sınıfından obje türetme
    const course = new Course(title, instructor, image);
    console.log(course);

    //Creating UI
    const ui = new UI();
    

    
    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please full complete the form', 'danger');
    } else {

        //add course to list
        ui.addCourseToList(course);


        //clear controls
        ui.clearControls();

        ui.showAlert('Form submit success', 'success');
    }



    e.preventDefault();
})

document.getElementById('course-list').addEventListener('click', function (e) {

    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('Course has been deleted', 'warning');

})